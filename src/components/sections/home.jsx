import React, { Component } from "react";

import Introduction from "../item/introduction";

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
          <Introduction />

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
