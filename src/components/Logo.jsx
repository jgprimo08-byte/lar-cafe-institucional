import React from "react";

export default function Logo() {
  return (
    <span className="logo-window">
      <img
        src={`${import.meta.env.BASE_URL}images/logo-original.png`}
        alt="Lar Café — Genuine Coffee House, estabelecida em 2016"
      />
    </span>
  );
}
