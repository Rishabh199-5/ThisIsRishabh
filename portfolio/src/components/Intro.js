import React from "react";
import IntroViewCSS from '../styles/Intro.module.css';
import skyISTheLimitGIF from '../assets/skyISTheLimit.gif';

const Intro = () => {
    const interests = [
        "a web developer",
        "a fitness enthusiast",
        "a dancer",
        "a proud Indian"
    ]
    return (
        <div className="intro">
            <div className={IntroViewCSS.middleBannerSection}>
                <h1 className = {IntroViewCSS.heading}>
                    <span className={IntroViewCSS.introView}>Rishabh Dangwal</span>
                    <br/>
                    <span className = "iama">I am </span> 
                    <span className = {IntroViewCSS.wrapper}>
                        {
                            interests.map((interest) => (
                                <b>{interest}</b>
                            ))
                        }
                    </span>
                </h1>
            <img className={IntroViewCSS.banner} src={skyISTheLimitGIF} />
            </div>
        </div>
    );
};

export default Intro;
