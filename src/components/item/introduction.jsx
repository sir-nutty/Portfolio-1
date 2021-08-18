import React from "react";

import Name from "../svg/name";

export default function Introduction() {
  return (
    <div className="intro">
      <h1 className="intro_title">
        <span className="title-1">Hello,</span>
        <br />
        <span className="title-2">I'm</span>
        <Name />
      </h1>
    </div>
  );
}
