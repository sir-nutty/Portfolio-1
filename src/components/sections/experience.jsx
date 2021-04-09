import React, { Component } from "react";

export default class Experience extends Component {
  state = {
    experience: [],
  };

  componentDidMount() {
    fetch("datastore/experience.json")
      .then((res) => res.json())
      .then((result) => {
        this.setState({ experience: result });
      });
  }

  render() {
    const { id } = this.props;
    const { experience } = this.state;

    return (
      <section className="experience section" id={id}>
        <h2 className="section-title">Experience</h2>

        <div className="experience_container grid">
          {experience.map((work, index) => (
            <div key={index} className="experience_row">
              <div className="experience_info">
                <img
                  className={
                    "experience_info-logo " +
                    work.company.replace(" ", "").toLowerCase()
                  }
                  src={work.logo}
                  alt={work.company}
                />
                <h4 className="experience_info-title">{work.job_title}</h4>
                <p className="experience_info-date">{work.date}</p>
              </div>

              <div className="experience_duty">
                <div className="experience_responsbility">
                  <ul>
                    {work.responsibilities.map((responbility, indexB) => (
                      <li key={indexB}>{responbility}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }
}
