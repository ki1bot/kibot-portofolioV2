import { useEffect, useRef, useState } from "react";

const JOURNEY_LOCATIONS = [
  {
    id: "sd-harapan-jaya-8",
    order: "01",
    title: "SDN Harapan Jaya 8",
    category: "Primary Education",
    period: "2012 - 2018",
    address:
      "Jl. Bengawan Solo II Blok B2 No.4, RT.003/RW.008, Harapan Jaya, Kec. Bekasi Utara, Kota Bks, Jawa Barat 17124",
    googleMapsUrl: "https://maps.app.goo.gl/9qEeQmZ4Nd5pm1bZ7",
    coordinates: [-6.2104, 106.9836],
  },
  {
    id: "smp-pangeran-jayakarta",
    order: "02",
    title: "SMP Pangeran Jayakarta",
    category: "Secondary Education",
    period: "2018 - 2021",
    address:
      "Jl. Jenderal Sudirman Jl. Buaran Bong Raya No.KM 28, RT.002/RW.006, Harapan Mulya, Kecamatan Medan Satria, Kota Bks, Jawa Barat 17143",
    googleMapsUrl: "https://maps.app.goo.gl/TrKyXpRuFkhDA3ow6",
    coordinates: [-6.2333, 106.9912],
  },
  {
    id: "smk-patriot-1-bekasi",
    order: "03",
    title: "SMK Patriot 1 Bekasi",
    category: "Vocational Education",
    period: "2021 - 2024",
    address:
      "Jl. Villa Utama No.17 Blok C, RT.003/RW.005, Kali Baru, Kecamatan Medan Satria, Kota Bks, Jawa Barat 17132",
    googleMapsUrl: "https://maps.app.goo.gl/3hbSN8pr8mhSHdJk6",
    coordinates: [-6.2198, 106.977],
  },
  {
    id: "universitas-gunadarma-kalimalang",
    order: "04",
    title: "Universitas Gunadarma Kalimalang",
    category: "Higher Education",
    period: "2024 - Sekarang",
    address:
      "QX2C+857, Jl. KH. Noer Ali, RT.005/RW.006A, Jakasampurna, Kec. Bekasi Bar., Kota Bks, Jawa Barat 17145",
    googleMapsUrl: "https://maps.app.goo.gl/xWFS3SWdvPoPnnZy5",
    coordinates: [-6.2491875, 106.9704375],
  },
];

function getAllLocationsGoogleMapsUrl() {
  const origin = encodeURIComponent(JOURNEY_LOCATIONS[0].address);
  const destination = encodeURIComponent(
    JOURNEY_LOCATIONS[JOURNEY_LOCATIONS.length - 1].address,
  );

  const waypoints = encodeURIComponent(
    JOURNEY_LOCATIONS.slice(1, -1)
      .map((location) => location.address)
      .join("|"),
  );

  return `https://www.google.com/maps/dir/?api=1&origin=${origin}&destination=${destination}&waypoints=${waypoints}`;
}

function createMarkerIcon(L, location, active) {
  const background = active ? "#ffd400" : "#151514";
  const color = active ? "#111111" : "#ffd400";
  const border = active ? "#ffd400" : "#ffd400";
  const shadow = active
    ? "0 0 0 6px rgba(255,212,0,0.18), 0 6px 18px rgba(0,0,0,0.28)"
    : "0 0 0 4px rgba(255,212,0,0.08), 0 5px 14px rgba(0,0,0,0.24)";

  return L.divIcon({
    className: "",
    html: `
      <div
        style="
          width: 38px;
          height: 38px;
          display: grid;
          place-items: center;
          border: 2px solid ${border};
          border-radius: 999px;
          background: ${background};
          color: ${color};
          font-family: monospace;
          font-size: 10px;
          font-weight: 900;
          letter-spacing: -0.03em;
          box-shadow: ${shadow};
          transition:
            transform 180ms ease,
            background-color 180ms ease,
            color 180ms ease,
            box-shadow 180ms ease;
        "
      >
        ${location.order}
      </div>
    `,
    iconSize: [38, 38],
    iconAnchor: [19, 19],
    popupAnchor: [0, -20],
  });
}

function createPopupContent(location) {
  return `
    <div
      style="
        width: 240px;
        padding: 4px 3px 3px;
        font-family: Arial, sans-serif;
      "
    >
      <div
        style="
          margin-bottom: 6px;
          font-family: monospace;
          font-size: 9px;
          font-weight: 900;
          letter-spacing: 0.12em;
          color: #9a7600;
          text-transform: uppercase;
        "
      >
        ${location.order} · ${location.category}
      </div>

      <div
        style="
          font-size: 14px;
          font-weight: 900;
          line-height: 1.3;
          color: #171716;
          text-transform: uppercase;
        "
      >
        ${location.title}
      </div>

      <div
        style="
          margin-top: 5px;
          font-size: 10px;
          font-weight: 700;
          color: #9a7600;
        "
      >
        ${location.period}
      </div>

      <div
        style="
          margin-top: 10px;
          font-size: 10px;
          line-height: 1.55;
          color: #6d6b65;
        "
      >
        ${location.address}
      </div>

      <a
        href="${location.googleMapsUrl}"
        target="_blank"
        rel="noopener noreferrer"
        style="
          display: inline-flex;
          margin-top: 12px;
          border-radius: 999px;
          background: #ffd400;
          padding: 8px 11px;
          font-size: 9px;
          font-weight: 900;
          color: #151515;
          text-decoration: none;
          text-transform: uppercase;
        "
      >
        Open Google Maps
      </a>
    </div>
  `;
}

function LocationPinIcon() {
  return (
    <svg
      width="18"
      height="18"
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

function RouteIcon() {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="6" cy="18" r="2" />
      <circle cx="18" cy="6" r="2" />
      <path d="M8 18h2.5a2.5 2.5 0 0 0 0-5H9a2.5 2.5 0 0 1 0-5h7" />
    </svg>
  );
}

function ExternalLinkIcon() {
  return (
    <svg
      width="14"
      height="14"
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

    L.polyline(coordinates, {
      color: "#d6aa00",
      weight: 3,
      opacity: 0.82,
      dashArray: "7 9",
      lineCap: "round",
      lineJoin: "round",
    }).addTo(map);

    markersRef.current = JOURNEY_LOCATIONS.map((location, index) => {
      const marker = L.marker(location.coordinates, {
        icon: createMarkerIcon(L, location, false),
        keyboard: true,
        title: location.title,
      }).addTo(map);

      marker.bindPopup(createPopupContent(location), {
        maxWidth: 280,
        minWidth: 240,
        closeButton: false,
        offset: [0, -2],
      });

      marker.bindTooltip(location.title, {
        direction: "top",
        offset: [0, -20],
        opacity: 0.96,
      });

      marker.on("click", () => {
        setActiveIndex(index);

        map.flyTo(location.coordinates, 16, {
          animate: true,
          duration: 0.85,
        });
      });

      return marker;
    });

    map.fitBounds(bounds, {
      paddingTopLeft: [55, 55],
      paddingBottomRight: [55, 55],
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

      if (activeIndex === null && boundsRef.current) {
        map.fitBounds(boundsRef.current, {
          paddingTopLeft: [55, 55],
          paddingBottomRight: [55, 55],
          maxZoom: 13,
          animate: false,
        });
      }
    };

    const resizeTimer = window.setTimeout(resizeMap, 240);

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
    const map = mapInstanceRef.current;
    const L = window.L;

    if (!map || !L || !markersRef.current.length) {
      return;
    }

    markersRef.current.forEach((marker, index) => {
      marker.setIcon(
        createMarkerIcon(L, JOURNEY_LOCATIONS[index], index === activeIndex),
      );
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
      paddingTopLeft: [55, 55],
      paddingBottomRight: [55, 55],
      maxZoom: 13,
      duration: 0.9,
    });
  }

  function selectLocation(index) {
    const map = mapInstanceRef.current;
    const location = JOURNEY_LOCATIONS[index];

    setActiveIndex(index);

    if (!map) {
      return;
    }

    map.flyTo(location.coordinates, 16, {
      animate: true,
      duration: 0.85,
    });

    window.setTimeout(() => {
      markersRef.current[index]?.openPopup();
    }, 520);
  }

  return (
    <div
      className="w-full overflow-hidden rounded-[18px] border border-black/[0.11] bg-white/56 shadow-[0_14px_38px_rgba(38,29,4,0.04)] backdrop-blur-[5px] dark:border-white/[0.09] dark:bg-[#111111]/94 dark:shadow-[0_18px_48px_rgba(0,0,0,0.28)]"
      data-reveal="right"
      style={{ "--reveal-delay": "110ms" }}
    >
      <div className="flex items-start justify-between gap-7 border-b border-black/[0.075] px-[30px] py-[28px] dark:border-white/[0.07] max-[520px]:gap-4 max-[520px]:px-[19px] max-[520px]:py-[20px]">
        <div className="min-w-0">
          <span className="font-mono text-[0.78rem] font-black tracking-[0.19em] text-[#9b7600] uppercase dark:text-[#ffd400] max-[760px]:text-[0.7rem] max-[520px]:text-[0.64rem]">
            // Academic Route
          </span>

          <h3 className="mt-[11px] text-[1.58rem] font-black leading-[1.08] tracking-[-0.042em] text-[#171716] uppercase dark:text-[#f1f1ee] max-[760px]:text-[1.38rem] max-[520px]:text-[1.16rem]">
            Education Map
          </h3>

          <p className="mt-[11px] max-w-[460px] text-[0.84rem] leading-[1.68] text-[#6f6e69] dark:text-[#9b9b96] max-[520px]:text-[0.72rem]">
            Explore the complete Academic Journey from primary education to
            Universitas Gunadarma across Bekasi, Jawa Barat.
          </p>
        </div>

        <span className="inline-flex h-[34px] shrink-0 items-center gap-[8px] rounded-full border border-black/[0.09] bg-black/[0.025] px-[12px] font-mono text-[0.55rem] font-black tracking-[0.1em] text-[#706d64] uppercase dark:border-white/[0.09] dark:bg-white/[0.035] dark:text-[#aaa9a3] max-[520px]:hidden">
          <span className="h-[7px] w-[7px] rounded-full bg-[#d2a300] dark:bg-[#ffd400]" />
          04 Locations
        </span>
      </div>

      <div className="p-[14px] pb-0 max-[520px]:p-[9px] max-[520px]:pb-0">
        <div className="relative overflow-hidden rounded-[14px] border border-black/[0.1] bg-[#e8e5da] dark:border-white/[0.085] dark:bg-[#181818]">
          <div
            ref={mapContainerRef}
            className="h-[540px] w-full max-[1380px]:h-[500px] max-[1180px]:h-[520px] max-[760px]:h-[430px] max-[520px]:h-[350px]"
            aria-label="Peta Academic Journey"
          />

          <div className="pointer-events-none absolute top-[14px] left-[14px] z-[500] max-w-[calc(100%-130px)] rounded-[11px] border border-black/[0.1] bg-[#fffdf8]/95 px-[14px] py-[11px] shadow-[0_8px_24px_rgba(0,0,0,0.12)] backdrop-blur-[10px] dark:border-white/[0.1] dark:bg-[#111]/93 dark:shadow-[0_8px_24px_rgba(0,0,0,0.35)] max-[520px]:top-[9px] max-[520px]:left-[9px] max-[520px]:px-[10px] max-[520px]:py-[8px]">
            <span className="block font-mono text-[0.48rem] font-black tracking-[0.15em] text-[#9c7800] uppercase dark:text-[#ffd400]">
              {activeLocation
                ? `Viewing ${activeLocation.order}`
                : "Journey Overview"}
            </span>

            <strong className="mt-[4px] block text-[0.78rem] font-black leading-[1.3] text-[#22211e] uppercase dark:text-[#ededeb] max-[520px]:text-[0.65rem]">
              {activeLocation
                ? activeLocation.title
                : "All Academic Journey Locations"}
            </strong>

            {!activeLocation ? (
              <span className="mt-[4px] block text-[0.54rem] font-medium text-[#76746d] dark:text-[#8a8a85]">
                SD → SMP → SMK → Universitas
              </span>
            ) : null}
          </div>

          <a
            href={
              activeLocation
                ? activeLocation.googleMapsUrl
                : getAllLocationsGoogleMapsUrl()
            }
            target="_blank"
            rel="noopener noreferrer"
            className="absolute top-[14px] right-[14px] z-[500] inline-flex h-[40px] items-center gap-[7px] rounded-full border border-black/[0.11] bg-[#fffdf8]/95 px-[13px] text-[0.55rem] font-black tracking-[0.025em] text-[#34332e] shadow-[0_7px_20px_rgba(0,0,0,0.1)] backdrop-blur-[9px] transition-[transform,border-color,background-color,color] duration-300 hover:-translate-y-[1px] hover:border-[#bf9400]/45 hover:bg-[#ffd400] hover:text-[#151515] dark:border-white/[0.11] dark:bg-[#111]/94 dark:text-[#e1e1dd] dark:shadow-[0_7px_20px_rgba(0,0,0,0.35)] dark:hover:border-[#ffd400] dark:hover:bg-[#ffd400] dark:hover:text-[#111] max-[520px]:top-auto max-[520px]:right-[9px] max-[520px]:bottom-[9px] max-[520px]:h-[35px] max-[520px]:px-[10px]"
          >
            <ExternalLinkIcon />

            {activeLocation ? "Google Maps" : "Open Route"}
          </a>
        </div>
      </div>

      <div className="px-[14px] pt-[15px] pb-[16px] max-[520px]:px-[9px] max-[520px]:pt-[10px] max-[520px]:pb-[10px]">
        <div className="mb-[12px] flex items-center justify-between gap-4 px-[3px]">
          <span className="font-mono text-[0.56rem] font-black tracking-[0.14em] text-[#77756e] uppercase dark:text-[#858580]">
            Journey Locations
          </span>

          <button
            type="button"
            onClick={showAllLocations}
            className={`inline-flex min-h-[33px] cursor-pointer items-center gap-[7px] rounded-full border px-[11px] font-mono text-[0.49rem] font-black tracking-[0.07em] uppercase transition-[transform,border-color,background-color,color] duration-300 hover:-translate-y-[1px] ${
              activeIndex === null
                ? "border-[#b68c00]/28 bg-[#ffd400]/10 text-[#8f6d00] dark:border-[#ffd400]/20 dark:bg-[#ffd400]/[0.06] dark:text-[#e1b500]"
                : "border-black/[0.09] bg-black/[0.02] text-[#77756f] hover:border-[#b68c00]/28 hover:text-[#967200] dark:border-white/[0.08] dark:bg-white/[0.025] dark:text-[#888883] dark:hover:border-[#ffd400]/18 dark:hover:text-[#d7ad00]"
            }`}
            aria-pressed={activeIndex === null}
          >
            <RouteIcon />
            All Locations
          </button>
        </div>

        <div className="grid gap-[9px]">
          {JOURNEY_LOCATIONS.map((location, index) => {
            const active = index === activeIndex;

            return (
              <button
                type="button"
                className={`group relative grid w-full cursor-pointer grid-cols-[48px_minmax(0,1fr)_auto] items-start gap-[14px] overflow-hidden rounded-[12px] border px-[15px] py-[15px] text-left outline-none transition-[transform,border-color,background-color,box-shadow] duration-[320ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-[1px] focus-visible:ring-2 focus-visible:ring-[#c89b00]/35 max-[520px]:grid-cols-[39px_minmax(0,1fr)] max-[520px]:gap-[10px] max-[520px]:px-[11px] max-[520px]:py-[12px] ${
                  active
                    ? "border-[#b88e00]/38 bg-[#ffd400]/[0.055] shadow-[0_8px_20px_rgba(90,68,0,0.045)] dark:border-[#ffd400]/20 dark:bg-[#ffd400]/[0.045] dark:shadow-none"
                    : "border-black/[0.085] bg-black/[0.018] hover:border-black/[0.14] hover:bg-black/[0.028] dark:border-white/[0.075] dark:bg-white/[0.025] dark:hover:border-white/[0.13] dark:hover:bg-white/[0.04]"
                }`}
                key={location.id}
                onClick={() => selectLocation(index)}
                aria-pressed={active}
              >
                <span
                  className={`grid h-[44px] w-[44px] place-items-center rounded-[10px] border font-mono text-[0.57rem] font-black transition-[border-color,background-color,color] duration-300 max-[520px]:h-[37px] max-[520px]:w-[37px] max-[520px]:text-[0.49rem] ${
                    active
                      ? "border-[#bc9200]/32 bg-[#ffd400]/12 text-[#8b6900] dark:border-[#ffd400]/24 dark:bg-[#ffd400]/[0.075] dark:text-[#ffd400]"
                      : "border-black/[0.09] bg-black/[0.025] text-[#74726b] dark:border-white/[0.08] dark:bg-white/[0.03] dark:text-[#999994]"
                  }`}
                  aria-hidden="true"
                >
                  {location.order}
                </span>

                <span className="min-w-0">
                  <span className="flex flex-wrap items-center gap-x-[9px] gap-y-[3px]">
                    <span
                      className={`text-[0.75rem] font-black leading-[1.3] tracking-[-0.01em] uppercase transition-colors duration-300 max-[520px]:text-[0.66rem] ${
                        active
                          ? "text-[#8d6b00] dark:text-[#ffd400]"
                          : "text-[#292824] dark:text-[#e2e2de]"
                      }`}
                    >
                      {location.title}
                    </span>

                    {active ? (
                      <span className="inline-flex items-center gap-[5px] font-mono text-[0.43rem] font-black tracking-[0.09em] text-[#997500] uppercase dark:text-[#d3aa00]">
                        <span className="h-[5px] w-[5px] rounded-full bg-[#d0a000] dark:bg-[#ffd400]" />
                        Viewing
                      </span>
                    ) : null}
                  </span>

                  <span className="mt-[4px] block font-mono text-[0.5rem] font-bold tracking-[0.08em] text-[#8a8880] uppercase dark:text-[#777772]">
                    {location.category} · {location.period}
                  </span>

                  <span className="mt-[8px] flex items-start gap-[7px] text-[0.61rem] leading-[1.58] text-[#6d6c66] dark:text-[#8c8c87] max-[520px]:text-[0.55rem]">
                    <span
                      className={`mt-[1px] shrink-0 transition-colors duration-300 ${
                        active
                          ? "text-[#a27d00] dark:text-[#ffd400]"
                          : "text-[#99968d] dark:text-[#666661]"
                      }`}
                    >
                      <LocationPinIcon />
                    </span>

                    <span>{location.address}</span>
                  </span>
                </span>

                <span
                  className={`mt-[3px] inline-flex min-h-[26px] items-center rounded-full border px-[8px] font-mono text-[0.43rem] font-black tracking-[0.07em] uppercase transition-[border-color,background-color,color] duration-300 max-[520px]:col-start-2 max-[520px]:mt-0 max-[520px]:w-fit ${
                    active
                      ? "border-[#b78c00]/22 bg-[#ffd400]/10 text-[#916e00] dark:border-[#ffd400]/17 dark:text-[#d8ad00]"
                      : "border-black/[0.075] bg-black/[0.018] text-[#8b8982] dark:border-white/[0.07] dark:bg-white/[0.025] dark:text-[#777772]"
                  }`}
                >
                  {active ? "Selected" : "View"}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="flex items-center gap-[10px] border-t border-black/[0.07] px-[18px] py-[15px] text-[0.57rem] leading-[1.55] text-[#79776f] dark:border-white/[0.065] dark:text-[#777772] max-[520px]:px-[13px]">
        <span className="grid h-[30px] w-[30px] shrink-0 place-items-center rounded-full border border-[#ad8500]/18 bg-[#ffd400]/7 text-[#9b7700] dark:border-[#ffd400]/14 dark:text-[#d3aa00]">
          {activeLocation ? <LocationPinIcon /> : <RouteIcon />}
        </span>

        {activeLocation
          ? `Menampilkan ${activeLocation.title}. Pilih All Locations untuk kembali ke overview.`
          : "Overview menampilkan seluruh lokasi Academic Journey sekaligus."}
      </div>
    </div>
  );
}
