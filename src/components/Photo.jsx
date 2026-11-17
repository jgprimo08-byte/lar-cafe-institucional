import React from "react";

export default function Photo({ className = "" }) {
  return (
    <img
      className={"photo " + className}
      src={`${import.meta.env.BASE_URL}images/cafeteria-original.png`}
      alt="Interior da Lar Café, com balcão e mesas de madeira e luminárias pendentes"
    />
  );
}
