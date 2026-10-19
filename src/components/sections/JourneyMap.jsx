import { useCallback, useEffect, useRef, useState } from "react";
import L from "leaflet";
import { JOURNEY_ITEMS } from "../../data/portfolioPage";

const JOURNEY_LOCATIONS = JOURNEY_ITEMS;
const MAP_BOUNDS = JOURNEY_LOCATIONS.map((location) => location.coordinates);

const TILE_PROVIDERS = [
  {
    url: "https://tile.openstreetmap.org/{z}/{x}/{y}.png",
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener noreferrer">OpenStreetMap</a> contributors',
  },
  {
    url: "https://basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png",
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener noreferrer">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions" target="_blank" rel="noopener noreferrer">CARTO</a>',
  },
];

function createMarkerIcon(active) {
  const background = active ? "#ffd400" : "#171716";
  const foreground = active ? "#111111" : "#ffd400";

  const shadow = active
    ? "0 0 0 7px rgba(255,212,0,0.18), 0 9px 24px rgba(0,0,0,0.34)"
    : "0 0 0 4px rgba(255,212,0,0.08), 0 7px 20px rgba(0,0,0,0.3)";

  return L.divIcon({
    className: "journey-location-marker",
    html: `
      <div
        style="
          width:42px;
          height:42px;
          display:grid;
          place-items:center;
          border:2px solid #ffd400;
          border-radius:50%;
          background:${background};
          color:${foreground};
          box-shadow:${shadow};
          transition:transform 200ms ease,background-color 200ms ease,box-shadow 200ms ease;
        "
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          aria-hidden="true"
        >
          <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"></path>
          <circle cx="12" cy="10" r="2.5"></circle>
        </svg>
      </div>
    `,
    iconSize: [42, 42],
    iconAnchor: [21, 21],
    popupAnchor: [0, -22],
    tooltipAnchor: [0, -23],
  });
}

function createPopupContent(location) {
  return `
    <div class="journey-popup-inner">
      <div class="journey-popup-eyebrow">
        ${location.category}
      </div>
      <div class="journey-popup-title">
        ${location.title}
      </div>
      <div class="journey-popup-period">
        ${location.period}
      </div>
      <div class="journey-popup-address">
        ${location.address}
      </div>
      <a
        class="journey-popup-link"
        href="${location.googleMapsUrl}"
        target="_blank"
        rel="noopener noreferrer"
      >
        Open Google Maps ↗
      </a>
    </div>
  `;
}

function MapIcon({ type = "pin", size = 18 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {type === "globe" ? (
        <>
          <circle cx="12" cy="12" r="9" />
          <path d="M3 12h18" />
          <path d="M12 3a15 15 0 0 1 0 18" />
          <path d="M12 3a15 15 0 0 0 0 18" />
        </>
      ) : type === "close" ? (
        <>
          <path d="M6 6l12 12" />
          <path d="M18 6 6 18" />
        </>
      ) : type === "external" ? (
        <>
          <path d="M14 5h5v5" />
          <path d="m19 5-8 8" />
          <path d="M19 13v5a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h5" />
        </>
      ) : (
        <>
          <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
          <circle cx="12" cy="10" r="2.5" />
        </>
      )}
    </svg>
  );
}

function getFallbackUrl(location) {
  const latitude = location?.coordinates[0] ?? -6.241;
  const longitude = location?.coordinates[1] ?? 106.994;

  const latPadding = location ? 0.012 : 0.052;
  const lngPadding = location ? 0.018 : 0.062;

  const bbox = [
    longitude - lngPadding,
    latitude - latPadding,
    longitude + lngPadding,
    latitude + latPadding,
  ].join(",");

  const marker = location ? `&marker=${latitude}%2C${longitude}` : "";

  return `https://www.openstreetmap.org/export/embed.html?bbox=${encodeURIComponent(bbox)}&layer=mapnik${marker}`;
}

export function JourneyMap() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [mapStatus, setMapStatus] = useState("loading");

  const mapContainerRef = useRef(null);
  const mapInstanceRef = useRef(null);
  const markersRef = useRef([]);
  const boundsRef = useRef(null);
  const activeIndexRef = useRef(null);
  const popupTimerRef = useRef(null);

  const activeLocation =
    activeIndex === null ? null : JOURNEY_LOCATIONS[activeIndex];

  const showAllLocations = useCallback(() => {
    activeIndexRef.current = null;
    setActiveIndex(null);

    window.clearTimeout(popupTimerRef.current);

    markersRef.current.forEach((marker) => {
      marker.closePopup();
    });

    const map = mapInstanceRef.current;

    if (map && boundsRef.current) {
      map.flyToBounds(boundsRef.current, {
        padding: [45, 45],
        maxZoom: 13,
        duration: 0.85,
      });
    }
  }, []);

  const toggleLocation = useCallback(
    (index) => {
      if (activeIndexRef.current === index) {
        showAllLocations();
        return;
      }

      activeIndexRef.current = index;
      setActiveIndex(index);

      window.clearTimeout(popupTimerRef.current);

      markersRef.current.forEach((marker) => {
        marker.closePopup();
      });

      const map = mapInstanceRef.current;

      if (!map) {
        return;
      }

      map.flyTo(JOURNEY_LOCATIONS[index].coordinates, 16, {
        animate: true,
        duration: 0.8,
      });

      popupTimerRef.current = window.setTimeout(() => {
        markersRef.current[index]?.openPopup();
      }, 850);
    },
    [showAllLocations],
  );

  useEffect(() => {
    const container = mapContainerRef.current;

    if (!container || mapInstanceRef.current) {
      return undefined;
    }

    let disposed = false;
    let tileTimer = null;
    let resizeTimer = null;
    let animationFrame = null;
    let activeLayer = null;
    let providerIndex = -1;

    const map = L.map(container, {
      zoomControl: false,
      scrollWheelZoom: false,
      doubleClickZoom: true,
      dragging: true,
      touchZoom: true,
      boxZoom: true,
      keyboard: true,
      attributionControl: true,
      zoomSnap: 0.25,
    });

    mapInstanceRef.current = map;

    const bounds = L.latLngBounds(MAP_BOUNDS);

    boundsRef.current = bounds;

    const activateProvider = (index) => {
      if (disposed) {
        return;
      }

      window.clearTimeout(tileTimer);

      if (activeLayer) {
        map.removeLayer(activeLayer);
        activeLayer = null;
      }

      if (index >= TILE_PROVIDERS.length) {
        setMapStatus("fallback");
        return;
      }

      providerIndex = index;

      const provider = TILE_PROVIDERS[index];

      const layer = L.tileLayer(provider.url, {
        maxZoom: 19,
        attribution: provider.attribution,
      });

      activeLayer = layer;

      let consecutiveErrors = 0;
      let tileLoaded = false;

      layer.on("tileload", () => {
        if (disposed || activeLayer !== layer) {
          return;
        }

        tileLoaded = true;
        consecutiveErrors = 0;

        window.clearTimeout(tileTimer);

        setMapStatus("ready");
      });

      layer.on("tileerror", () => {
        if (disposed || activeLayer !== layer) {
          return;
        }

        consecutiveErrors += 1;

        if (consecutiveErrors >= 4) {
          activateProvider(providerIndex + 1);
        }
      });

      layer.addTo(map);

      tileTimer = window.setTimeout(() => {
        if (!disposed && activeLayer === layer && !tileLoaded) {
          activateProvider(providerIndex + 1);
        }
      }, 9000);
    };

    map.fitBounds(bounds, {
      padding: [45, 45],
      maxZoom: 13,
      animate: false,
    });

    markersRef.current = JOURNEY_LOCATIONS.map((location, index) => {
      const marker = L.marker(location.coordinates, {
        icon: createMarkerIcon(false),
        keyboard: true,
        title: location.title,
        riseOnHover: true,
      }).addTo(map);

      marker.bindPopup(createPopupContent(location), {
        className: "journey-map-popup",
        maxWidth: 320,
        minWidth: 240,
        closeButton: false,
        offset: [0, -3],
      });

      marker.bindTooltip(location.shortTitle, {
        className: "journey-map-tooltip",
        direction: "top",
        offset: [0, -22],
        opacity: 1,
      });

      marker.on("click", () => {
        toggleLocation(index);
      });

      return marker;
    });

    L.control
      .zoom({
        position: "bottomright",
      })
      .addTo(map);

    activateProvider(0);

    const resizeMap = () => {
      if (disposed || !container.clientWidth || !container.clientHeight) {
        return;
      }

      if (animationFrame !== null) {
        window.cancelAnimationFrame(animationFrame);
      }

      animationFrame = window.requestAnimationFrame(() => {
        if (disposed) {
          return;
        }

        map.invalidateSize({
          pan: false,
          animate: false,
        });

        if (activeIndexRef.current === null) {
          map.fitBounds(bounds, {
            padding: [45, 45],
            maxZoom: 13,
            animate: false,
          });
        }
      });
    };

    const resizeObserver =
      typeof ResizeObserver !== "undefined"
        ? new ResizeObserver(resizeMap)
        : null;

    resizeObserver?.observe(container);

    const visibilityObserver =
      typeof IntersectionObserver !== "undefined"
        ? new IntersectionObserver(
            (entries) => {
              if (entries.some((entry) => entry.isIntersecting)) {
                resizeMap();
              }
            },
            {
              threshold: 0.01,
            },
          )
        : null;

    visibilityObserver?.observe(container);

    const onVisibilityChange = () => {
      if (document.visibilityState === "visible") {
        resizeMap();
      }
    };

    window.addEventListener("resize", resizeMap);
    window.addEventListener("pageshow", resizeMap);

    document.addEventListener("visibilitychange", onVisibilityChange);

    resizeTimer = window.setTimeout(resizeMap, 250);

    resizeMap();

    return () => {
      disposed = true;

      window.clearTimeout(tileTimer);
      window.clearTimeout(resizeTimer);
      window.clearTimeout(popupTimerRef.current);

      if (animationFrame !== null) {
        window.cancelAnimationFrame(animationFrame);
      }

      window.removeEventListener("resize", resizeMap);
      window.removeEventListener("pageshow", resizeMap);

      document.removeEventListener("visibilitychange", onVisibilityChange);

      resizeObserver?.disconnect();
      visibilityObserver?.disconnect();

      map.remove();

      markersRef.current = [];
      boundsRef.current = null;
      mapInstanceRef.current = null;
    };
  }, [toggleLocation]);

  useEffect(() => {
    markersRef.current.forEach((marker, index) => {
      marker.setIcon(createMarkerIcon(index === activeIndex));
    });
  }, [activeIndex]);

  return (
    <div
      className="journey-map-shell w-full overflow-hidden rounded-[20px] border border-[#d8ccae] bg-[#fffdf8]/96 shadow-[0_16px_42px_rgba(75,56,10,0.08)] backdrop-blur-[6px] dark:border-white/[0.1] dark:bg-[#111111]/95 dark:shadow-[0_22px_60px_rgba(0,0,0,0.32)]"
      data-reveal="right"
      style={{
        "--reveal-delay": "110ms",
      }}
    >
      <div className="relative overflow-hidden border-b border-[#dfd3b7] bg-[#fffaf0]/80 px-[30px] py-[29px] dark:border-white/[0.07] dark:bg-transparent max-[520px]:px-[19px] max-[520px]:py-[21px]">
        <div
          className="pointer-events-none absolute top-0 right-0 h-[180px] w-[250px] bg-[radial-gradient(circle_at_top_right,rgba(255,212,0,0.17),transparent_68%)] dark:bg-[radial-gradient(circle_at_top_right,rgba(255,212,0,0.055),transparent_68%)]"
          aria-hidden="true"
        />

        <div className="relative flex items-start justify-between gap-8 max-[520px]:gap-4">
          <div className="min-w-0">
            <span className="inline-flex items-center gap-[9px] font-mono text-[0.8rem] font-black tracking-[0.19em] text-[#836400] uppercase dark:text-[#ffd400] max-[760px]:text-[0.7rem] max-[520px]:text-[0.63rem]">
              <span className="grid h-[29px] w-[29px] place-items-center rounded-[8px] border border-[#b88d00]/25 bg-[#ffd400]/14 text-[#8b6800] dark:border-[#ffd400]/14 dark:bg-[#ffd400]/9 dark:text-[#ffd400]">
                <MapIcon size={15} />
              </span>
              Academic Route
            </span>

            <h3 className="mt-[14px] text-[1.7rem] font-black leading-[1.05] tracking-[-0.045em] text-[#201d16] uppercase dark:text-[#f2f2ef] max-[760px]:text-[1.45rem] max-[520px]:text-[1.2rem]">
              Education Map
            </h3>

            <p className="mt-[12px] max-w-[470px] text-[0.86rem] leading-[1.7] text-[#5d594f] dark:text-[#9a9a95] max-[520px]:text-[0.73rem]">
              Explore the locations from SMK Patriot 1 Bekasi, PKL at Dinas
              Perhubungan Kota Bekasi, Universitas Gunadarma Kalimalang, to the
              Informatics Laboratory assistant role.
            </p>
          </div>

          <div className="flex shrink-0 flex-col items-end gap-[10px] max-[520px]:hidden">
            <span className="inline-flex h-[42px] items-center gap-[10px] rounded-full border border-[#cdbd93] bg-[#fffdf8]/84 px-[15px] font-mono text-[0.7rem] font-black tracking-[0.1em] text-[#625b4c] uppercase dark:border-white/[0.09] dark:bg-white/[0.035] dark:text-[#c1c1bc]">
              <span className="h-[8px] w-[8px] rounded-full bg-[#c99a00] dark:bg-[#ffd400]" />
              {JOURNEY_LOCATIONS.length} Locations
            </span>

            <span className="pr-[4px] font-mono text-[0.59rem] font-bold tracking-[0.1em] text-[#716b5e] uppercase dark:text-[#85857f]">
              Bekasi · Jawa Barat
            </span>
          </div>
        </div>
      </div>

      <div className="p-[14px] pb-0 max-[520px]:p-[9px] max-[520px]:pb-0">
        <div
          className={`relative overflow-hidden rounded-[15px] border border-[#d6c8a5] bg-[#e8e5da] shadow-[0_10px_28px_rgba(63,46,7,0.08)] dark:border-white/[0.09] dark:bg-[#181818] ${
            mapStatus === "fallback" ? "journey-map-fallback" : ""
          }`}
        >
          <div
            ref={mapContainerRef}
            className="h-[550px] w-full max-[1380px]:h-[510px] max-[1180px]:h-[520px] max-[760px]:h-[430px] max-[520px]:h-[350px]"
            role="region"
            aria-label="Peta lokasi Academic Journey"
          />

          {mapStatus === "loading" && (
            <div
              className="journey-map-loading pointer-events-none absolute inset-0 z-[400] flex flex-col items-center justify-center gap-3 bg-[#e8e5da] text-center dark:bg-[#181818]"
              role="status"
            >
              <span className="journey-map-spinner" aria-hidden="true" />

              <strong className="text-sm font-bold text-[#5b5342] dark:text-[#e5e2d8]">
                Memuat peta lokasi...
              </strong>

              <span className="px-6 text-xs text-[#776f5e] dark:text-[#aaa79f]">
                Sedang menghubungkan layanan peta.
              </span>
            </div>
          )}

          {mapStatus === "fallback" && (
            <div className="absolute inset-0 z-[400] bg-[#e8e5da] dark:bg-[#181818]">
              <iframe
                key={activeLocation?.id ?? "all-locations"}
                src={getFallbackUrl(activeLocation)}
                title="Peta cadangan Academic Journey dari OpenStreetMap"
                className="h-full w-full border-0"
                loading="eager"
                referrerPolicy="strict-origin-when-cross-origin"
              />

              <div className="absolute right-2 bottom-2 left-2 rounded-lg border border-[#cdbd93] bg-[#fffdf8]/95 p-3 text-xs text-[#514b40] shadow-lg dark:border-white/20 dark:bg-[#171717]/95 dark:text-[#ddd]">
                Tampilan peta cadangan aktif. Jika peta juga terhalang koneksi,
                pilih lokasi lalu klik Google Maps.
              </div>
            </div>
          )}

          <div className="pointer-events-none absolute top-[15px] left-[15px] z-[500] max-w-[calc(100%-130px)] rounded-[12px] border border-[#d0bc83] bg-[#fffaf0]/96 px-[15px] py-[12px] shadow-[0_10px_30px_rgba(70,51,8,0.14)] backdrop-blur-[11px] dark:border-white/[0.105] dark:bg-[#111]/94 max-[520px]:top-[9px] max-[520px]:left-[9px] max-[520px]:px-[11px] max-[520px]:py-[9px]">
            <span className="block font-mono text-[0.52rem] font-black tracking-[0.15em] text-[#876600] uppercase dark:text-[#ffd400]">
              {activeLocation ? "Selected Location" : "Journey Overview"}
            </span>

            <strong className="mt-[5px] block text-[0.86rem] font-black leading-[1.3] text-[#262219] uppercase dark:text-[#ededeb] max-[520px]:text-[0.7rem]">
              {activeLocation
                ? activeLocation.title
                : "All Academic Journey Locations"}
            </strong>

            <span className="mt-[5px] block text-[0.61rem] font-medium leading-[1.4] text-[#716a5c] dark:text-[#898984]">
              {activeLocation
                ? activeLocation.period
                : "Four Academic Journey locations across Bekasi"}
            </span>
          </div>

          {activeLocation && (
            <a
              href={activeLocation.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute top-[15px] right-[15px] z-[500] inline-flex h-[41px] items-center gap-[7px] rounded-full border border-[#ceb97e] bg-[#fffaf0]/96 px-[14px] text-[0.6rem] font-black text-[#3e382a] shadow-[0_8px_24px_rgba(67,49,8,0.12)] transition-all hover:bg-[#ffd400] dark:border-white/[0.11] dark:bg-[#111]/95 dark:text-[#e1e1dd] dark:hover:bg-[#ffd400] dark:hover:text-[#111] max-[520px]:top-auto max-[520px]:right-[9px] max-[520px]:bottom-[9px] max-[520px]:h-[36px] max-[520px]:px-[10px]"
            >
              <MapIcon type="external" size={14} />
              Google Maps
            </a>
          )}
        </div>
      </div>

      <div className="px-[14px] pt-[20px] pb-[20px] max-[520px]:px-[9px] max-[520px]:pt-[14px] max-[520px]:pb-[13px]">
        <div className="mb-[17px] flex items-center justify-between gap-5 px-[4px]">
          <div>
            <span className="block font-mono text-[0.86rem] font-black tracking-[0.15em] text-[#615b4e] uppercase dark:text-[#c0c0bb] max-[520px]:text-[0.72rem]">
              Academic Locations
            </span>

            <span className="mt-[7px] block text-[0.76rem] font-medium leading-[1.55] text-[#70695c] dark:text-[#999994] max-[520px]:text-[0.65rem]">
              Select a location to focus the map
            </span>
          </div>

          <button
            type="button"
            onClick={showAllLocations}
            aria-pressed={activeIndex === null}
            className={`inline-flex min-h-[52px] cursor-pointer items-center gap-[11px] rounded-full border px-[17px] transition-all duration-300 hover:-translate-y-[1px] max-[520px]:min-h-[44px] max-[520px]:gap-[8px] max-[520px]:px-[12px] ${
              activeIndex === null
                ? "border-[#c39b13]/45 bg-[#fff0a8]/65 text-[#725700] dark:border-[#ffd400]/22 dark:bg-[#ffd400]/[0.07] dark:text-[#e4b700]"
                : "border-[#d2c5a7] bg-[#fffdf8]/90 text-[#686154] hover:bg-[#fff6cf] dark:border-white/[0.085] dark:bg-white/[0.025] dark:text-[#9b9b95]"
            }`}
          >
            {activeIndex === null ? (
              <>
                <span className="grid h-[30px] w-[30px] place-items-center rounded-full border border-[#b68c00]/25 bg-[#ffd400]/13">
                  <MapIcon type="globe" size={16} />
                </span>

                <span className="grid text-left">
                  <strong className="font-mono text-[0.78rem] leading-none font-black tracking-[0.1em] uppercase max-[520px]:text-[0.66rem]">
                    Overview
                  </strong>

                  <small className="mt-[5px] font-mono text-[0.54rem] leading-none font-bold tracking-[0.09em] opacity-75 uppercase max-[520px]:text-[0.47rem]">
                    All Locations
                  </small>
                </span>
              </>
            ) : (
              <>
                <MapIcon type="close" size={17} />

                <span className="font-mono text-[0.65rem] font-black tracking-[0.07em] uppercase max-[520px]:text-[0.57rem]">
                  Clear Selection
                </span>
              </>
            )}
          </button>
        </div>

        <div className="grid gap-[12px]">
          {JOURNEY_LOCATIONS.map((location, index) => {
            const active = index === activeIndex;

            return (
              <button
                type="button"
                key={location.id}
                onClick={() => toggleLocation(index)}
                aria-pressed={active}
                className={`hero-projects-button group relative grid w-full cursor-pointer grid-cols-[54px_minmax(0,1fr)_auto] items-center gap-[16px] rounded-[14px] px-[18px] py-[18px] text-left outline-none backdrop-blur-[10px] focus-visible:ring-2 focus-visible:ring-[#c89b00]/35 max-[520px]:grid-cols-[46px_minmax(0,1fr)] max-[520px]:gap-[12px] max-[520px]:px-[14px] max-[520px]:py-[15px] ${
                  active
                    ? "!border-[#b98c00] !bg-[#fff8dc] dark:!border-[#d6ad1d] dark:!bg-[#151515]"
                    : ""
                }`}
              >
                <span
                  className={`grid h-[52px] w-[52px] place-items-center rounded-[12px] border max-[520px]:h-[44px] max-[520px]:w-[44px] ${
                    active
                      ? "border-[#b78d00]/35 bg-[#ffd400]/18 text-[#7c5e00] dark:border-[#ffd400]/24 dark:bg-[#ffd400]/[0.08] dark:text-[#ffd400]"
                      : "border-black/[0.09] bg-black/[0.025] text-[#777064] dark:border-white/[0.085] dark:bg-white/[0.032] dark:text-[#aaa9a3]"
                  }`}
                  aria-hidden="true"
                >
                  <MapIcon size={21} />
                </span>

                <span className="min-w-0">
                  <span className="flex flex-wrap items-center gap-x-[10px] gap-y-[5px]">
                    <span
                      className={`text-[0.9rem] font-black leading-[1.3] tracking-[-0.012em] uppercase max-[520px]:text-[0.76rem] ${
                        active
                          ? "text-[#795c00] dark:text-[#ffd400]"
                          : "text-[#29261f] dark:text-[#edede9]"
                      }`}
                    >
                      {location.title}
                    </span>

                    {active && (
                      <span className="inline-flex items-center gap-[6px] font-mono text-[0.51rem] font-black tracking-[0.09em] text-[#8d6a00] uppercase dark:text-[#d4aa00]">
                        <span className="h-[6px] w-[6px] rounded-full bg-[#c99a00] dark:bg-[#ffd400]" />
                        Selected
                      </span>
                    )}
                  </span>

                  <span className="mt-[6px] block font-mono text-[0.59rem] font-bold tracking-[0.075em] text-[#736d60] uppercase dark:text-[#8b8b85] max-[520px]:text-[0.53rem]">
                    {location.category} · {location.period}
                  </span>

                  <span className="mt-[10px] block text-[0.72rem] leading-[1.68] text-[#5e5a50] dark:text-[#a09f99] max-[520px]:text-[0.63rem]">
                    {location.address}
                  </span>
                </span>

                <span
                  className={`inline-flex min-h-[32px] items-center gap-[6px] rounded-full border px-[11px] font-mono text-[0.52rem] font-black tracking-[0.065em] uppercase max-[520px]:col-start-2 max-[520px]:w-fit max-[520px]:min-h-[29px] max-[520px]:px-[9px] max-[520px]:text-[0.47rem] ${
                    active
                      ? "border-[#b78d00]/30 bg-[#ffd400]/14 text-[#785a00] dark:border-[#ffd400]/17 dark:text-[#d8ad00]"
                      : "border-black/[0.075] bg-black/[0.018] text-[#70695d] dark:border-white/[0.07] dark:bg-white/[0.025] dark:text-[#8a8a84]"
                  }`}
                >
                  <MapIcon type={active ? "close" : "pin"} size={12} />
                  {active ? "Deselect" : "View"}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="flex items-center gap-[15px] border-t border-[#ded2b6] bg-[#faf5e8]/76 px-[21px] py-[21px] dark:border-white/[0.065] dark:bg-transparent max-[520px]:px-[15px] max-[520px]:py-[17px]">
        <span className="grid h-[40px] w-[40px] shrink-0 place-items-center rounded-full border border-[#b9921c]/25 bg-[#ffd400]/10 text-[#856500] dark:border-[#ffd400]/14 dark:text-[#d3aa00]">
          <MapIcon type={activeLocation ? "pin" : "globe"} size={19} />
        </span>

        <div className="min-w-0">
          <span className="block text-[0.84rem] font-bold leading-[1.4] text-[#514d44] dark:text-[#c0bfba] max-[520px]:text-[0.72rem]">
            {activeLocation
              ? activeLocation.title
              : "Academic Journey Overview"}
          </span>

          <span className="mt-[5px] block text-[0.72rem] leading-[1.65] text-[#746e62] dark:text-[#979792] max-[520px]:text-[0.62rem]">
            {activeLocation
              ? "Klik lokasi yang sama sekali lagi atau Clear Selection untuk membatalkan pilihan."
              : "Seluruh lokasi Academic Journey sedang ditampilkan pada peta."}
          </span>
        </div>
      </div>
    </div>
  );
}
