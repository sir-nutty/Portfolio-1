import React from "react";

export default function ActiveCodeButton(props) {
  return (
    <a
      className="project_link view_code button active"
      href={props.code}
      target="_blank"
      rel="noopener noreferrer"
    >
      View Code
    </a>
  );
}
