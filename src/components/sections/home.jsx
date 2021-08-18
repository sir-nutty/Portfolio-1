import React, { Component } from "react";

import Name from "../svg/name";

import "../../css/title-animation.css";

export default class Home extends Component {
  state = {
    socials: null,
    resume: { path: null, file: null },
  };

  componentDidMount() {
    fetch("datastore/resume.json")
      .then((res) => res.json())
      .then((result) => {
        this.setState({ resume: result });
      });
  }

  render() {
    const { id } = this.props;
    const { resume } = this.state;

    return (
      <section className="home grid" id={id}>
        <div className="home_data">
          <h1 className="home_title">
            <span className="title-1">Hello,</span>
            <br />
            <span className="title-2">I'm</span>
            <Name />
            <br /> <span className="title-3">Web Developer</span>
          </h1>

          <div className="home_download">
            <a className="button" href={resume.path} download={resume.file}>
              Download Resume
            </a>
          </div>
        </div>
      </section>
    );
  }
}
