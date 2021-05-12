import React from "react";

import ImageSlider from "./image_slider";
import ActiveCodeButton from "./active_code_button";
import InactiveCodeButton from "./inactive_code_button";

export default function Project(props) {
  const { name, link, code, description, techStack, features, images } = props;

  return (
    <React.Fragment>
      <div className="project_container">
        <div className="project_header">
          <h2 className="project_title">{name}</h2>

          <div className="project_header_buttons">
            <a
              className="project_link button"
              href={link}
              target="_blank"
              rel="noopener noreferrer"
            >
              Go to Site
            </a>

            {code ? <ActiveCodeButton code={code} /> : <InactiveCodeButton />}
          </div>
        </div>

        <div className="project_content">
          <div className="project_description">
            <p>{description}</p>
            {code ? null : (
              <p className="inactive_message">
                <br />
                <span>NOTE:</span> Source code for this project is restricted.
                Please use the <a href={"#Contact"}>contact form</a> to request
                access to view. Thank you.
              </p>
            )}
          </div>

          <div className="project_techStack">
            <div className="techStack_header">
              <h3>Tech Stack</h3>
            </div>

            <div className="techStack_content">
              {techStack.map((tech, index) => (
                <div key={index} className="tech">
                  <i className={"bx " + tech.icon + " tech_icon"} />
                  <span className="tech_name">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="project_features">
            <div className="features_header">
              <h3>Site Features</h3>
            </div>

            <div className="features_content">
              <ul>
                {features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="project_images">
            {images.length > 1 ? (
              <ImageSlider images={images} name={name} />
            ) : (
              <img className="project_image" src={images[0]} alt={name} />
            )}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
