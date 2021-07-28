import React from 'react';
import mod from './Skills.module.sass';
import Fade from "react-reveal/Fade";

let Skills = ({skills}) => {

    return (
        <Fade bottom>
            <div className={mod.skills} id='skills'>
                <div className={mod.container}>
                    <div className={mod.skillsTitle}>{skills.title}</div>
                    <div className={mod.skillsLevel}>
                        {skills.skill.map(item => {
                            return <div key={item.id} className={mod.skill}>
                                <img src={item.image} alt={item.alt}/>{item.title}
                            </div>
                        })}
                    </div>
                </div>
            </div>
        </Fade>
    );
};

export default Skills;
