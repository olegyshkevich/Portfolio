import React from 'react';
import mod from './Footer.module.sass';
import upArrow from '../../images/up-arrow.svg';
import Fade from "react-reveal/Fade";

let Footer = ({footer}) => {
    return (
        <div className={mod.footer}>
            <Fade bottom>
                <div className={mod.container}>
                    <div>{footer.author}</div>
                    <div className={mod.footerMainBlock}>
                        {footer.links.map( item => {
                            return <div key={item.id} className={`${mod.footerItem} ${mod.effect} ${mod.sub}`}>
                                <a href={item.link} target='_blank'>
                                    <img src={item.image} alt={item.alt}/>
                                </a>
                            </div>
                        })}
                    </div>
                    <div className={mod.footerCopywriter}>{footer.copywrite}</div>
                </div>
            </Fade>
        </div>
    );
};

export default Footer;
