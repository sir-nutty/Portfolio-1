import React, { Component } from "react";

export default class About extends Component {
  state = {
    about: null,
    image: null,
  };

  componentDidMount() {
    fetch("datastore/about.json")
      .then((res) => res.json())
      .then((result) => {
        this.setState({ about: result.about, image: result.image });
      });
  }

  render() {
    const { id } = this.props;
    const { about, image } = this.state;

    return (
      <section className="about grey-padding section" id={id}>
        <div className="about-wrapper">
          <h2 className="section-title">About</h2>

          <div className="about_container grid">
            {image === "" ? (
              <React.Fragment />
            ) : (
              <div className="about_img">
                <img src={image} alt="About" />
              </div>
            )}
            <div>
              <h2 className="about_subtitle">Hello, I'm Darnell</h2>
              <p className="about_text">{about}</p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
