import React from 'react';
import mod from './Projects.module.sass';

function Project({project}) {

    let front, bottom;
    switch (project.id) {
        case 1:
            front = mod.front1;
            bottom = mod.bottom1;
            break;
        default:
            front = mod.front1;
            bottom = mod.bottom1;
            break;
    }

    return (
        <div>
            <a href={project.link} className={mod.projectsItemImage}>
                <h2>{project.title}</h2>
                <div className={mod.top}>
                    <div className={`${front} ${mod.face}`}></div>
                    <div className={`${mod.back} ${mod.face}`}>{project.text}</div>
                </div>
                <div className={bottom}></div>
            </a>

        </div>
    );
}

export default Project;
