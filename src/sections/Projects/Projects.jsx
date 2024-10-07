// projeler buradan değişiyor

import React from "react";
import styles from "./ProjectsStyles.module.css";
import viberr from "../../assets/assets/viberr.png";
import freshBurger from '../../assets/assets/fresh-burger.png'
import ProjectCard from "../../common/ProjectCard";
import hipsster from '../../assets/assets/hipsster.png'
import fitlift from '../../assets/assets/fitlift.png'

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard src={viberr} link='https://github.com/mithatural/JS-Gamb' h3='Bet Machine' p={"Gambling Background"} />
        <ProjectCard src={freshBurger} link='https://github.com/mithatural/jsCalc' h3='Calculator App' p={"IOS Calculator"} />
        <ProjectCard src={hipsster} link='https://github.com/mithatural/portfolio-building' h3='This Website' p={"Portfolio App"} />
        <ProjectCard src={fitlift} link='https://github.com/mithatural/Wallet-App' h3='Wallet App' p={"Modern Wallet App"} />
      </div>
    </section>
  );
}

export default Projects;
