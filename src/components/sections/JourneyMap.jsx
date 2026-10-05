import { useEffect, useRef, useState } from "react";

const JOURNEY_LOCATIONS = [
  {
    id: "sd-harapan-jaya-8",
    title: "SDN Harapan Jaya 8",
    shortTitle: "SDN Harapan Jaya 8",
    category: "Primary Education",
    period: "2012 - 2018",
    address:
      "Jl. Bengawan Solo II Blok B2 No.4, RT.003/RW.008, Harapan Jaya, Kec. Bekasi Utara, Kota Bks, Jawa Barat 17124",
    googleMapsUrl: "https://maps.app.goo.gl/9qEeQmZ4Nd5pm1bZ7",
    coordinates: [-6.2104, 106.9836],
  },
  {
    id: "smp-pangeran-jayakarta",
    title: "SMP Pangeran Jayakarta",
    shortTitle: "SMP Pangeran Jayakarta",
    category: "Secondary Education",
    period: "2018 - 2021",
    address:
      "Jl. Jenderal Sudirman Jl. Buaran Bong Raya No.KM 28, RT.002/RW.006, Harapan Mulya, Kecamatan Medan Satria, Kota Bks, Jawa Barat 17143",
    googleMapsUrl: "https://maps.app.goo.gl/TrKyXpRuFkhDA3ow6",
    coordinates: [-6.225533, 106.986872],
  },
  {
    id: "smk-patriot-1-bekasi",
    title: "SMK Patriot 1 Bekasi",
    shortTitle: "SMK Patriot 1 Bekasi",
    category: "Vocational Education",
    period: "2021 - 2024",
    address:
      "Jl. Villa Utama No.17 Blok C, RT.003/RW.005, Kali Baru, Kecamatan Medan Satria, Kota Bks, Jawa Barat 17132",
    googleMapsUrl: "https://maps.app.goo.gl/3hbSN8pr8mhSHdJk6",
    coordinates: [-6.2198, 106.977],
  },
  {
    id: "universitas-gunadarma-kalimalang",
    title: "Universitas Gunadarma Kalimalang",
    shortTitle: "Universitas Gunadarma",
    category: "Higher Education",
    period: "2024 - Sekarang",
    address:
      "QX2C+857, Jl. KH. Noer Ali, RT.005/RW.006A, Jakasampurna, Kec. Bekasi Bar., Kota Bks, Jawa Barat 17145",
    googleMapsUrl: "https://maps.app.goo.gl/xWFS3SWdvPoPnnZy5",
    coordinates: [-6.2491875, 106.9704375],
  },
];

function createMarkerIcon(L, active) {
  const background = active ? "#ffd400" : "#171716";
  const foreground = active ? "#111111" : "#ffd400";
  const border = active ? "rgba(255,212,0,1)" : "rgba(255,212,0,0.92)";
  const shadow = active
    ? "0 0 0 7px rgba(255,212,0,0.18), 0 9px 24px rgba(0,0,0,0.34)"
    : "0 0 0 4px rgba(255,212,0,0.08), 0 7px 20px rgba(0,0,0,0.3)";

  return L.divIcon({
    className: "journey-location-marker",
    html: `
      <div
        style="
          width: 42px;
          height: 42px;
          display: grid;
          place-items: center;
          border: 2px solid ${border};
          border-radius: 50%;
          background: ${background};
          color: ${foreground};
          box-shadow: ${shadow};
          transition:
            transform 200ms ease,
            background-color 200ms ease,
            color 200ms ease,
            box-shadow 200ms ease;
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
        <span>Open Google Maps</span>

        <svg
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          aria-hidden="true"
        >
          <path d="M14 5h5v5"></path>
          <path d="m19 5-8 8"></path>
          <path d="M19 13v5a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h5"></path>
        </svg>
      </a>
    </div>
  `;
}

function LocationPinIcon({ size = 18 }) {
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
      <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

function GlobeIcon({ size = 18 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <path d="M12 3a15 15 0 0 1 0 18" />
      <path d="M12 3a15 15 0 0 0 0 18" />
    </svg>
  );
}

function ExternalLinkIcon({ size = 14 }) {
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
      <path d="M14 5h5v5" />
      <path d="m19 5-8 8" />
      <path d="M19 13v5a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h5" />
    </svg>
  );
}

function CloseIcon({ size = 14 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M6 6l12 12" />
      <path d="M18 6 6 18" />
    </svg>
  );
}

export function JourneyMap() {
  const [activeIndex, setActiveIndex] = useState(null);

  const mapContainerRef = useRef(null);
  const mapInstanceRef = useRef(null);
  const markersRef = useRef([]);
  const boundsRef = useRef(null);

  const activeLocation =
    activeIndex === null ? null : JOURNEY_LOCATIONS[activeIndex];

  useEffect(() => {
    if (!mapContainerRef.current || !window.L || mapInstanceRef.current) {
      return undefined;
    }

    const L = window.L;

    const map = L.map(mapContainerRef.current, {
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

    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noreferrer">OpenStreetMap</a> contributors',
    }).addTo(map);

    const coordinates = JOURNEY_LOCATIONS.map(
      (location) => location.coordinates,
    );

    const bounds = L.latLngBounds(coordinates);

    boundsRef.current = bounds;

    markersRef.current = JOURNEY_LOCATIONS.map((location, index) => {
      const marker = L.marker(location.coordinates, {
        icon: createMarkerIcon(L, false),
        keyboard: true,
        title: location.title,
        riseOnHover: true,
      }).addTo(map);

      marker.bindPopup(createPopupContent(location), {
        className: "journey-map-popup",
        maxWidth: 320,
        minWidth: 270,
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
        setActiveIndex((currentIndex) => {
          if (currentIndex === index) {
            marker.closePopup();

            map.flyToBounds(bounds, {
              paddingTopLeft: [70, 70],
              paddingBottomRight: [70, 70],
              maxZoom: 13,
              duration: 0.85,
            });

            return null;
          }

          markersRef.current.forEach((otherMarker) => {
            if (otherMarker !== marker) {
              otherMarker.closePopup();
            }
          });

          map.flyTo(location.coordinates, 16, {
            animate: true,
            duration: 0.8,
          });

          return index;
        });
      });

      return marker;
    });

    map.fitBounds(bounds, {
      paddingTopLeft: [70, 70],
      paddingBottomRight: [70, 70],
      maxZoom: 13,
    });

    L.control
      .zoom({
        position: "bottomright",
      })
      .addTo(map);

    const resizeMap = () => {
      map.invalidateSize({
        animate: false,
      });
    };

    const resizeTimer = window.setTimeout(() => {
      resizeMap();

      map.fitBounds(bounds, {
        paddingTopLeft: [70, 70],
        paddingBottomRight: [70, 70],
        maxZoom: 13,
        animate: false,
      });
    }, 240);

    const resizeObserver =
      typeof ResizeObserver !== "undefined"
        ? new ResizeObserver(resizeMap)
        : null;

    if (resizeObserver && mapContainerRef.current) {
      resizeObserver.observe(mapContainerRef.current);
    }

    window.addEventListener("resize", resizeMap);

    return () => {
      window.clearTimeout(resizeTimer);

      window.removeEventListener("resize", resizeMap);

      resizeObserver?.disconnect();

      map.remove();

      markersRef.current = [];
      boundsRef.current = null;
      mapInstanceRef.current = null;
    };
  }, []);

  useEffect(() => {
    const L = window.L;

    if (!L || !markersRef.current.length) {
      return;
    }

    markersRef.current.forEach((marker, index) => {
      marker.setIcon(createMarkerIcon(L, index === activeIndex));
    });
  }, [activeIndex]);

  function showAllLocations() {
    const map = mapInstanceRef.current;

    setActiveIndex(null);

    markersRef.current.forEach((marker) => {
      marker.closePopup();
    });

    if (!map || !boundsRef.current) {
      return;
    }

    map.flyToBounds(boundsRef.current, {
      paddingTopLeft: [70, 70],
      paddingBottomRight: [70, 70],
      maxZoom: 13,
      duration: 0.85,
    });
  }

  function toggleLocation(index) {
    if (activeIndex === index) {
      showAllLocations();
      return;
    }

    const map = mapInstanceRef.current;
    const location = JOURNEY_LOCATIONS[index];

    setActiveIndex(index);

    markersRef.current.forEach((marker, markerIndex) => {
      if (markerIndex !== index) {
        marker.closePopup();
      }
    });

    if (!map) {
      return;
    }

    map.flyTo(location.coordinates, 16, {
      animate: true,
      duration: 0.8,
    });

    window.setTimeout(() => {
      markersRef.current[index]?.openPopup();
    }, 480);
  }

  return (
    <>
      <style>
        {`
          .journey-map-shell .leaflet-control-zoom {
            overflow: hidden;
            border: 1px solid rgba(20, 20, 18, 0.14);
            border-radius: 10px;
            box-shadow: 0 8px 24px rgba(0, 0, 0, 0.14);
          }

          .journey-map-shell .leaflet-control-zoom a {
            display: grid;
            width: 40px;
            height: 40px;
            place-items: center;
            border: 0;
            border-bottom: 1px solid rgba(20, 20, 18, 0.09);
            background: rgba(255, 253, 248, 0.96);
            color: #292824;
            font-size: 20px;
          }

          .journey-map-shell .leaflet-control-zoom a:last-child {
            border-bottom: 0;
          }

          .journey-map-shell .leaflet-control-zoom a:hover {
            background: #ffd400;
            color: #111111;
          }

          .journey-map-shell .leaflet-control-attribution {
            border-radius: 7px 0 0 0;
            background: rgba(255, 255, 255, 0.88);
            color: #77756f;
            font-size: 10px;
            backdrop-filter: blur(8px);
          }

          .journey-map-shell .leaflet-control-attribution a {
            color: #745a00;
          }

          .journey-map-popup .leaflet-popup-content-wrapper {
            overflow: hidden;
            border: 1px solid rgba(20, 20, 18, 0.11);
            border-radius: 14px;
            background: rgba(255, 253, 248, 0.98);
            box-shadow: 0 18px 46px rgba(0, 0, 0, 0.2);
          }

          .journey-map-popup .leaflet-popup-content {
            margin: 0;
          }

          .journey-map-popup .leaflet-popup-tip {
            background: rgba(255, 253, 248, 0.98);
          }

          .journey-popup-inner {
            padding: 19px;
          }

          .journey-popup-eyebrow {
            font-family: monospace;
            font-size: 10px;
            font-weight: 900;
            letter-spacing: 0.14em;
            color: #9a7600;
            text-transform: uppercase;
          }

          .journey-popup-title {
            margin-top: 8px;
            font-size: 16px;
            font-weight: 900;
            line-height: 1.3;
            color: #171716;
            text-transform: uppercase;
          }

          .journey-popup-period {
            margin-top: 7px;
            font-size: 12px;
            font-weight: 800;
            color: #9a7600;
          }

          .journey-popup-address {
            margin-top: 12px;
            font-size: 12px;
            line-height: 1.65;
            color: #65635e;
          }

          .journey-popup-link {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            margin-top: 14px;
            border-radius: 999px;
            background: #ffd400;
            padding: 9px 12px;
            color: #151515;
            font-size: 10px;
            font-weight: 900;
            text-decoration: none;
            text-transform: uppercase;
          }

          .journey-map-tooltip {
            border: 1px solid rgba(255, 212, 0, 0.24);
            border-radius: 8px;
            background: rgba(20, 20, 19, 0.94);
            color: #f1f1ed;
            padding: 8px 10px;
            font-size: 11px;
            font-weight: 800;
            box-shadow: 0 8px 22px rgba(0, 0, 0, 0.22);
          }

          .journey-map-tooltip::before {
            border-top-color: rgba(20, 20, 19, 0.94);
          }

          .journey-location-marker:hover > div {
            transform: translateY(-2px) scale(1.06);
          }

          .dark .journey-map-shell .leaflet-control-zoom {
            border-color: rgba(255, 255, 255, 0.12);
          }

          .dark .journey-map-shell .leaflet-control-zoom a {
            border-bottom-color: rgba(255, 255, 255, 0.08);
            background: rgba(18, 18, 17, 0.96);
            color: #deded9;
          }

          .dark .journey-map-shell .leaflet-control-zoom a:hover {
            background: #ffd400;
            color: #111111;
          }

          .dark .journey-map-popup .leaflet-popup-content-wrapper {
            border-color: rgba(255, 255, 255, 0.1);
            background: rgba(20, 20, 19, 0.98);
          }

          .dark .journey-map-popup .leaflet-popup-tip {
            background: rgba(20, 20, 19, 0.98);
          }

          .dark .journey-popup-title {
            color: #f0f0ec;
          }

          .dark .journey-popup-address {
            color: #a09f99;
          }

          .dark .journey-map-shell .leaflet-control-attribution {
            background: rgba(18, 18, 17, 0.88);
            color: #8c8b85;
          }

          .dark .journey-map-shell .leaflet-control-attribution a {
            color: #d5aa00;
          }
        `}
      </style>

      <div
        className="journey-map-shell w-full overflow-hidden rounded-[20px] border border-black/[0.11] bg-white/58 shadow-[0_18px_48px_rgba(38,29,4,0.055)] backdrop-blur-[6px] dark:border-white/[0.1] dark:bg-[#111111]/95 dark:shadow-[0_22px_60px_rgba(0,0,0,0.32)]"
        data-reveal="right"
        style={{ "--reveal-delay": "110ms" }}
      >
        <div className="relative overflow-hidden border-b border-black/[0.075] px-[30px] py-[29px] dark:border-white/[0.07] max-[520px]:px-[19px] max-[520px]:py-[21px]">
          <div
            className="pointer-events-none absolute top-0 right-0 h-[160px] w-[220px] bg-[radial-gradient(circle_at_top_right,rgba(255,212,0,0.09),transparent_68%)] dark:bg-[radial-gradient(circle_at_top_right,rgba(255,212,0,0.055),transparent_68%)]"
            aria-hidden="true"
          />

          <div className="relative flex items-start justify-between gap-8 max-[520px]:gap-4">
            <div className="min-w-0">
              <span className="inline-flex items-center gap-[9px] font-mono text-[0.8rem] font-black tracking-[0.19em] text-[#987400] uppercase dark:text-[#ffd400] max-[760px]:text-[0.7rem] max-[520px]:text-[0.63rem]">
                <span className="grid h-[27px] w-[27px] place-items-center rounded-[7px] border border-[#b88d00]/18 bg-[#ffd400]/9 text-[#987400] dark:border-[#ffd400]/14 dark:text-[#ffd400]">
                  <LocationPinIcon size={14} />
                </span>
                Academic Route
              </span>

              <h3 className="mt-[14px] text-[1.7rem] font-black leading-[1.05] tracking-[-0.045em] text-[#171716] uppercase dark:text-[#f2f2ef] max-[760px]:text-[1.45rem] max-[520px]:text-[1.2rem]">
                Education Map
              </h3>

              <p className="mt-[12px] max-w-[470px] text-[0.86rem] leading-[1.7] text-[#696863] dark:text-[#9a9a95] max-[520px]:text-[0.73rem]">
                Explore every location in my Academic Journey across Bekasi,
                from primary education to Universitas Gunadarma.
              </p>
            </div>

            <div className="flex shrink-0 flex-col items-end gap-[8px] max-[520px]:hidden">
              <span className="inline-flex h-[34px] items-center gap-[8px] rounded-full border border-black/[0.09] bg-black/[0.025] px-[12px] font-mono text-[0.54rem] font-black tracking-[0.09em] text-[#6d6b65] uppercase dark:border-white/[0.09] dark:bg-white/[0.035] dark:text-[#aaa9a4]">
                <span className="h-[7px] w-[7px] rounded-full bg-[#d0a100] dark:bg-[#ffd400]" />
                4 Locations
              </span>

              <span className="font-mono text-[0.47rem] font-bold tracking-[0.08em] text-[#929087] uppercase dark:text-[#6f6f6b]">
                Bekasi · Jawa Barat
              </span>
            </div>
          </div>
        </div>

        <div className="p-[14px] pb-0 max-[520px]:p-[9px] max-[520px]:pb-0">
          <div className="relative overflow-hidden rounded-[15px] border border-black/[0.105] bg-[#e8e5da] shadow-[0_9px_26px_rgba(0,0,0,0.06)] dark:border-white/[0.09] dark:bg-[#181818]">
            <div
              ref={mapContainerRef}
              className="h-[550px] w-full max-[1380px]:h-[510px] max-[1180px]:h-[520px] max-[760px]:h-[430px] max-[520px]:h-[350px]"
              aria-label="Peta lokasi Academic Journey"
            />

            <div className="pointer-events-none absolute top-[15px] left-[15px] z-[500] max-w-[calc(100%-130px)] rounded-[12px] border border-black/[0.105] bg-[#fffdf8]/95 px-[15px] py-[12px] shadow-[0_10px_30px_rgba(0,0,0,0.14)] backdrop-blur-[11px] dark:border-white/[0.105] dark:bg-[#111]/94 dark:shadow-[0_10px_30px_rgba(0,0,0,0.4)] max-[520px]:top-[9px] max-[520px]:left-[9px] max-[520px]:px-[11px] max-[520px]:py-[9px]">
              <span className="block font-mono text-[0.52rem] font-black tracking-[0.15em] text-[#987400] uppercase dark:text-[#ffd400]">
                {activeLocation ? "Selected Location" : "Journey Overview"}
              </span>

              <strong className="mt-[5px] block text-[0.86rem] font-black leading-[1.3] text-[#22211e] uppercase dark:text-[#ededeb] max-[520px]:text-[0.7rem]">
                {activeLocation
                  ? activeLocation.title
                  : "All Academic Journey Locations"}
              </strong>

              <span className="mt-[5px] block text-[0.61rem] font-medium leading-[1.4] text-[#76746d] dark:text-[#898984]">
                {activeLocation
                  ? activeLocation.period
                  : "Four education locations across Bekasi"}
              </span>
            </div>

            {activeLocation ? (
              <a
                href={activeLocation.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute top-[15px] right-[15px] z-[500] inline-flex h-[41px] items-center gap-[7px] rounded-full border border-black/[0.11] bg-[#fffdf8]/96 px-[14px] text-[0.6rem] font-black tracking-[0.025em] text-[#34332e] shadow-[0_8px_24px_rgba(0,0,0,0.12)] backdrop-blur-[10px] transition-[transform,border-color,background-color,color] duration-300 hover:-translate-y-[1px] hover:border-[#bf9400]/45 hover:bg-[#ffd400] hover:text-[#151515] dark:border-white/[0.11] dark:bg-[#111]/95 dark:text-[#e1e1dd] dark:shadow-[0_8px_24px_rgba(0,0,0,0.4)] dark:hover:border-[#ffd400] dark:hover:bg-[#ffd400] dark:hover:text-[#111] max-[520px]:top-auto max-[520px]:right-[9px] max-[520px]:bottom-[9px] max-[520px]:h-[36px] max-[520px]:px-[10px]"
              >
                <ExternalLinkIcon />
                Google Maps
              </a>
            ) : null}
          </div>
        </div>

        <div className="px-[14px] pt-[20px] pb-[20px] max-[520px]:px-[9px] max-[520px]:pt-[14px] max-[520px]:pb-[13px]">
          <div className="mb-[17px] flex items-center justify-between gap-5 px-[4px]">
            <div>
              <span className="block font-mono text-[0.72rem] font-black tracking-[0.15em] text-[#6f6d66] uppercase dark:text-[#aaa9a3] max-[520px]:text-[0.63rem]">
                Academic Locations
              </span>

              <span className="mt-[5px] block text-[0.67rem] leading-[1.5] text-[#85837b] dark:text-[#81817c] max-[520px]:text-[0.6rem]">
                Select a location to focus the map
              </span>
            </div>

            <button
              type="button"
              onClick={showAllLocations}
              className={`inline-flex min-h-[38px] cursor-pointer items-center gap-[8px] rounded-full border px-[14px] font-mono text-[0.59rem] font-black tracking-[0.065em] uppercase transition-[transform,border-color,background-color,color] duration-300 hover:-translate-y-[1px] max-[520px]:min-h-[35px] max-[520px]:px-[11px] max-[520px]:text-[0.52rem] ${
                activeIndex === null
                  ? "border-[#b68c00]/25 bg-[#ffd400]/9 text-[#8a6900] dark:border-[#ffd400]/18 dark:bg-[#ffd400]/[0.055] dark:text-[#dfb300]"
                  : "border-black/[0.09] bg-black/[0.02] text-[#73716a] hover:border-[#b68c00]/28 hover:text-[#906d00] dark:border-white/[0.085] dark:bg-white/[0.025] dark:text-[#9b9b95] dark:hover:border-[#ffd400]/18 dark:hover:text-[#d7ad00]"
              }`}
              aria-pressed={activeIndex === null}
            >
              {activeIndex === null ? (
                <GlobeIcon size={17} />
              ) : (
                <CloseIcon size={16} />
              )}

              {activeIndex === null ? "Overview" : "Clear Selection"}
            </button>
          </div>

          <div className="grid gap-[12px]">
            {JOURNEY_LOCATIONS.map((location, index) => {
              const active = index === activeIndex;

              return (
                <button
                  type="button"
                  className={`group relative grid w-full cursor-pointer grid-cols-[54px_minmax(0,1fr)_auto] items-center gap-[16px] overflow-hidden rounded-[14px] border px-[18px] py-[18px] text-left outline-none transition-[transform,border-color,background-color,box-shadow] duration-[320ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-[1px] focus-visible:ring-2 focus-visible:ring-[#c89b00]/35 max-[520px]:grid-cols-[46px_minmax(0,1fr)] max-[520px]:gap-[12px] max-[520px]:px-[14px] max-[520px]:py-[15px] ${
                    active
                      ? "border-[#b88e00]/38 bg-[#ffd400]/[0.06] shadow-[0_9px_24px_rgba(90,68,0,0.055)] dark:border-[#ffd400]/22 dark:bg-[#ffd400]/[0.05] dark:shadow-none"
                      : "border-black/[0.085] bg-black/[0.018] hover:border-black/[0.15] hover:bg-black/[0.03] dark:border-white/[0.075] dark:bg-white/[0.024] dark:hover:border-white/[0.14] dark:hover:bg-white/[0.04]"
                  }`}
                  key={location.id}
                  onClick={() => toggleLocation(index)}
                  aria-pressed={active}
                >
                  <span
                    className={`grid h-[52px] w-[52px] place-items-center rounded-[12px] border transition-[border-color,background-color,color,transform] duration-300 group-hover:scale-[1.025] max-[520px]:h-[44px] max-[520px]:w-[44px] ${
                      active
                        ? "border-[#ba9000]/30 bg-[#ffd400]/13 text-[#8d6b00] dark:border-[#ffd400]/24 dark:bg-[#ffd400]/[0.08] dark:text-[#ffd400]"
                        : "border-black/[0.09] bg-black/[0.027] text-[#88857d] dark:border-white/[0.085] dark:bg-white/[0.032] dark:text-[#aaa9a3]"
                    }`}
                    aria-hidden="true"
                  >
                    <LocationPinIcon size={21} />
                  </span>

                  <span className="min-w-0">
                    <span className="flex flex-wrap items-center gap-x-[10px] gap-y-[5px]">
                      <span
                        className={`text-[0.9rem] font-black leading-[1.3] tracking-[-0.012em] uppercase transition-colors duration-300 max-[520px]:text-[0.76rem] ${
                          active
                            ? "text-[#896800] dark:text-[#ffd400]"
                            : "text-[#292824] dark:text-[#ededE9]"
                        }`}
                      >
                        {location.title}
                      </span>

                      {active ? (
                        <span className="inline-flex items-center gap-[6px] font-mono text-[0.51rem] font-black tracking-[0.09em] text-[#967200] uppercase dark:text-[#d4aa00]">
                          <span className="h-[6px] w-[6px] rounded-full bg-[#cd9d00] dark:bg-[#ffd400]" />
                          Selected
                        </span>
                      ) : null}
                    </span>

                    <span className="mt-[6px] block font-mono text-[0.59rem] font-bold tracking-[0.075em] text-[#77756e] uppercase dark:text-[#8b8b85] max-[520px]:text-[0.53rem]">
                      {location.category} · {location.period}
                    </span>

                    <span className="mt-[10px] block text-[0.72rem] leading-[1.68] text-[#64625d] dark:text-[#a09f99] max-[520px]:text-[0.63rem]">
                      {location.address}
                    </span>
                  </span>

                  <span
                    className={`inline-flex min-h-[32px] items-center gap-[6px] rounded-full border px-[11px] font-mono text-[0.52rem] font-black tracking-[0.065em] uppercase transition-[border-color,background-color,color] duration-300 max-[520px]:col-start-2 max-[520px]:w-fit max-[520px]:min-h-[29px] max-[520px]:px-[9px] max-[520px]:text-[0.47rem] ${
                      active
                        ? "border-[#b78c00]/22 bg-[#ffd400]/10 text-[#8e6b00] dark:border-[#ffd400]/17 dark:text-[#d8ad00]"
                        : "border-black/[0.075] bg-black/[0.018] text-[#77756e] dark:border-white/[0.07] dark:bg-white/[0.025] dark:text-[#8a8a84]"
                    }`}
                  >
                    {active ? (
                      <>
                        <CloseIcon size={12} />
                        Deselect
                      </>
                    ) : (
                      <>
                        <LocationPinIcon size={12} />
                        View
                      </>
                    )}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="flex items-center gap-[13px] border-t border-black/[0.07] px-[21px] py-[19px] dark:border-white/[0.065] max-[520px]:px-[15px] max-[520px]:py-[16px]">
          <span className="grid h-[36px] w-[36px] shrink-0 place-items-center rounded-full border border-[#ad8500]/18 bg-[#ffd400]/7 text-[#987400] dark:border-[#ffd400]/14 dark:text-[#d3aa00]">
            {activeLocation ? (
              <LocationPinIcon size={18} />
            ) : (
              <GlobeIcon size={18} />
            )}
          </span>

          <div className="min-w-0">
            <span className="block text-[0.7rem] font-bold leading-[1.4] text-[#5f5d58] dark:text-[#aaa9a3] max-[520px]:text-[0.63rem]">
              {activeLocation
                ? activeLocation.title
                : "Academic Journey Overview"}
            </span>

            <span className="mt-[4px] block text-[0.62rem] leading-[1.6] text-[#85837c] dark:text-[#858580] max-[520px]:text-[0.56rem]">
              {activeLocation
                ? "Klik lokasi yang sama sekali lagi atau Clear Selection untuk membatalkan pilihan."
                : "Seluruh lokasi Academic Journey sedang ditampilkan pada peta."}
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
