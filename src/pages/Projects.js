import React, { useState } from "react";
import Header from "../components/Header";
import TitleBar from "../components/TitleBar";
import Footer from "../components/Footer";
import SideBar from "../components/SideBar";
import MenuMobile from "../components/MenuMobile";
import projects from "../data/projects";
import "../styles/Projects.css";
import { FiExternalLink, FiGithub } from "react-icons/fi";

function ProjectCard({ project }) {
  return (
    <div className="card-project">
      <div className="img-container">
        <img src={project.src} alt={project.name} className="img-project" />
      </div>
      <h2 className="title-project">{project.name}</h2>
      <p>{project.description}</p>
      <div className="technologies-container">
        {project.technologies.map((tech, index) => (
          <span key={index} className="span-technologies">
            {tech}
          </span>
        ))}
      </div>
      <div className="links-container">
        <a
          href={project.repository}
          title="Github"
          target="_blank"
          rel="noreferrer"
        >
          <FiGithub />
        </a>
        <a
          href={project.site}
          title="View application"
          target="_blank"
          rel="noreferrer"
        >
          <FiExternalLink />
        </a>
      </div>
    </div>
  );
}

function Projects() {
  const [typeFilter, setTypeFilter] = useState("all");

  const filteredProjects =
    typeFilter === "all"
      ? projects
      : projects.filter(({ type }) => type === typeFilter);

  return (
    <div>
      <TitleBar />
      <section className="flex-container">
        <section className="main-container">
          <Header />
          <MenuMobile />
          <main className="main-wrapper projects">
            <h1 className="title-page-projects">My projects...</h1>
            <div className="btn-container">
              <button
                type="button"
                className={`btn-filter ${typeFilter === "all" && "active"}`}
                onClick={() => setTypeFilter("all")}
              >
                All
              </button>
              <button
                type="button"
                className={`btn-filter ${typeFilter === "front" && "active"}`}
                onClick={() => setTypeFilter("front")}
              >
                Front-end
              </button>
              <button
                type="button"
                className={`btn-filter ${typeFilter === "back" && "active"}`}
                onClick={() => setTypeFilter("back")}
              >
                Back-end
              </button>
            </div>
            <div className="projects-container">
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </main>
        </section>
        <SideBar />
      </section>
      <Footer />
    </div>
  );
}

export default Projects;
