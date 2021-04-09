import React, { Component } from "react";

export default class ImageSlider extends Component {
  state = {
    id: this.props.name.split(" ").join(""),
    length: this.props.images.length,
    btnClass: "auto-btn",
  };

  componentDidMount() {
    const { id, length, btnClass } = this.state;
    const project = document.getElementById(id);
    const firstSlide = project.getElementsByClassName("first")[0];

    var counter = 1;
    var btnClassTemp = btnClass + counter;

    project.getElementsByClassName(btnClassTemp)[0].classList.toggle("active"); // Toggle active state for button

    /* Automatic slide mover */
    setInterval(function () {
      project
        .getElementsByClassName(btnClassTemp)[0]
        .classList.toggle("active"); // Untoggle current node
      counter++; // Move to next node

      if (counter > length) counter = 1; //Reset counter if it passes the length

      btnClassTemp = btnClass + counter;
      project
        .getElementsByClassName(btnClassTemp)[0]
        .classList.toggle("active"); // Toggle active state for button
      firstSlide.style.marginLeft = (counter - 1) * -20 + "%";
    }, 5000);
  }

  render() {
    const { images, name } = this.props;
    const { id, btnClass } = this.state;

    return (
      <div className="slider" id={id}>
        <div className="slides">
          {/* Slide Images */}
          {images.map((image, index) => (
            <div
              key={index}
              className={index === 0 ? "slide first" : "slide"}
              id={index === 0 ? "first" : ""}
            >
              <img src={image} alt={name} />
            </div>
          ))}
        </div>

        {/* Automatic Nativation */}
        <div className="navigation_auto">
          {images.map((image, index) => (
            <div key={index} className={btnClass + (index + 1)} />
          ))}
        </div>
      </div>
    );
  }
}
