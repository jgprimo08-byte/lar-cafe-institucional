import React from "react";

export default function Link({ to, children, secondary = false }) {
  return (
    <a className={"button" + (secondary ? " secondary" : "")} href={"#" + to}>
      {children}
      <span aria-hidden="true">↗</span>
    </a>
  );
}
