import React from 'react';
import mod from './Projects.module.sass';
import Fade from "react-reveal/Fade";
import Project from "./Project";

let Projects = ({projects}) => {
    return (
        <Fade bottom>
            <div className={mod.projects} id='projects'>
                <div className={mod.container}>
                    <div className={mod.projectsMainBlock}>
                        <div className={mod.projectsTitle}>
                            {projects.title}
                            <span>{projects.underTitle}</span>
                        </div>
                        <div className={mod.projectsItems}>
                            {projects.project.map(el => <Project key={el.id} project={el}/>)}
                        </div>
                    </div>
                </div>
            </div>
        </Fade>
    );
};

export default Projects;
