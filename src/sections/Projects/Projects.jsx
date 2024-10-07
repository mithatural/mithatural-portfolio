import React from "react";
import styles from "./ProjectsStyles.module.css";
import viberr from "../../assets/assets/viberr.png";
import ProjectCard from "../../common/ProjectCard";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard src={viberr} link='https://github.com/mithatural/JS-Gamb' h3='Bet Machine' p={"Gambling Background"} />
      </div>
    </section>
  );
}

export default Projects;
