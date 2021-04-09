import React, { Component } from "react";

export default class Skills extends Component {
  state = {
    skills: [],
  };

  componentDidMount() {
    fetch("datastore/skills.json")
      .then((res) => res.json())
      .then((result) => {
        this.setState({ skills: result });
      });
  }

  render() {
    const { id } = this.props;
    const { skills } = this.state;

    return (
      <section className="skills section" id={id}>
        <div className="skills_wrapper">
          <h2 className="section-title">Skills</h2>

          <div className="skills_container grid">
            <div className="skills_data-container">
              {skills.map((skill, index) => (
                <div key={index} className="skills_data">
                  <div className="skills_names">
                    <i className={"bx " + skill.icon + " skills_icon"} />
                    <span className="skills_name">{skill.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }
}
