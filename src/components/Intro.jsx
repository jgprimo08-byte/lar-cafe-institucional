import React from "react";
import Kicker from "./Kicker";

export default function Intro({ label, title, children }) {
  return (
    <section className="page-intro wrap">
      <Kicker>{label}</Kicker>
      <h1>{title}</h1>
      <p className="lead">{children}</p>
    </section>
  );
}
