import React from "react";

export default function Socials(props) {
  const { socials } = props;

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
