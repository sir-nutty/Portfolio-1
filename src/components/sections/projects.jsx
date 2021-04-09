import React, { Component } from "react";

import Project from "../item/project";

export default class Projects extends Component {
  state = {
    projects: [],
  };

  componentDidMount() {
    fetch("datastore/projects.json")
      .then((res) => res.json())
      .then((result) => {
        this.setState({ projects: result });
      });
  }

  render() {
    const { id } = this.props;
    const { projects } = this.state;

    return (
      <section className="projects section" id={id}>
        <h2 className="section-title">Projects</h2>

        <div className="projects_container grid">
          {projects.map((project, index) => (
            <Project
              key={index}
              name={project.name}
              link={project.link}
              code={project.code_link === "" ? null : project.code_link}
              description={project.description}
              techStack={project.tech}
              features={project.features}
              images={project.images}
            />
          ))}
        </div>
      </section>
    );
  }
}
