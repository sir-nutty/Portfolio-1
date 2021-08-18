import React from "react";

import useSocialsAPI from "../hooks/useSocialsAPI";

export default function Socials() {
  const { socials } = useSocialsAPI();

  return (
    <div className="socials">
      {socials ? (
        socials.map((social, index) => (
          <a
            key={index}
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            className={
              "social-icon " + social.name.replace(" ", "").toLowerCase()
            }
          >
            <i className={"bx " + social.icon}></i>
          </a>
        ))
      ) : (
        <React.Fragment />
      )}
    </div>
  );
}
