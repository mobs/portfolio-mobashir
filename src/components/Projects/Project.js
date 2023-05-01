import React from "react";

import styles from "./project.module.css";
import projectCoverImg from "../asset/project-cover10.png";
import ProjectItem from "./ProjectItem";
import ProjectsData from "../../Data/ProjectsData";
import SocialData from "../../Data/SocialData";
import Button from "../UI/Button";

import ProgrammingSkills from "../Professional Skillset/ProgrammingSkills";
import { useSelector } from "react-redux";

const Projects = (props) => {
    const nonThemeColor = useSelector(state => state.nonThemeColor);
    const uiColor = useSelector(state => state.uiColor);
    let projects = ProjectsData.MY_PROJECTS;
    return (
        <>
            <div className={styles.projects}>
                <section className={styles.projectImg}>
                    <img src={projectCoverImg} alt="" />
                </section>
                <section className={styles.projectHeader}>
                    <h1><span style={{ color: nonThemeColor }}>My Recent </span><span style={{ color: uiColor }}>Works</span></h1>
                    <div>I have worked on latest frontend technologies which includes but not limited to REACT JS, REDUX, MATERIAL UI, NEXT JS etc.</div>
                </section>
            </div>
            <ProgrammingSkills />
            <h1 className={styles.projectHeading} style={{ color: nonThemeColor }}>My Projects</h1>
            <div className={styles.projectList}>
                {projects.map((item, index) => {
                    return <ProjectItem key={index} project={item} />
                })}
            </div>
            <div className={styles.moreProject}>
                <a href={`${SocialData.githubLink}?tab=repositories`}>
                    <Button className={styles.moreProjectBtn}>More Projects</Button>
                </a>
            </div>
        </>
    )
};

export default Projects;