"use client";

import { useEffect } from "react";
import { MapContainer, TileLayer, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

const LAT = -6.7783538;
const LNG = 39.2331357;

function RippleMarker() {
  const map = useMap();

  useEffect(() => {
    const rippleIcon = L.divIcon({
      className: "",
      html: `
        <div style="position:relative;width:80px;height:80px;transform:translate(-50%,-50%)">
          <span style="
            position:absolute;inset:0;border-radius:50%;
            background:rgba(200,169,106,0.18);
            animation:msw-ripple 2.4s ease-out infinite;
          "></span>
          <span style="
            position:absolute;inset:12px;border-radius:50%;
            background:rgba(200,169,106,0.28);
            animation:msw-ripple 2.4s ease-out infinite 0.6s;
          "></span>
          <span style="
            position:absolute;inset:24px;border-radius:50%;
            background:rgba(200,169,106,0.45);
            animation:msw-ripple 2.4s ease-out infinite 1.2s;
          "></span>
          <span style="
            position:absolute;inset:33px;border-radius:50%;
            background:#c8a96a;
            box-shadow:0 0 0 3px #fff,0 4px 16px rgba(200,169,106,0.55);
          "></span>
        </div>
        <div style="
          position:absolute;top:84px;left:50%;transform:translateX(-50%);
          white-space:nowrap;background:#1a1a1a;color:#fff;
          font-size:11px;font-family:sans-serif;font-weight:600;
          letter-spacing:0.06em;padding:5px 10px;border-radius:6px;
          box-shadow:0 2px 8px rgba(0,0,0,0.25);
        ">Mswano Apartments</div>
        <style>
          @keyframes msw-ripple {
            0%   { transform:scale(0.5); opacity:1; }
            100% { transform:scale(2.4); opacity:0; }
          }
        </div>
      `,
      iconSize: [0, 0],
      iconAnchor: [0, 0],
    });

    const marker = L.marker([LAT, LNG], { icon: rippleIcon }).addTo(map);
    return () => { marker.remove(); };
  }, [map]);

  return null;
}

export default function LocationMap() {
  return (
    <MapContainer
      center={[LAT, LNG]}
      zoom={17}
      scrollWheelZoom={false}
      zoomControl={false}
      style={{ height: "100%", width: "100%" }}
      className="z-0"
    >
      <TileLayer
        attribution='&copy; <a href="https://carto.com/">CARTO</a>'
        url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
      />
      <RippleMarker />
    </MapContainer>
  );
}
