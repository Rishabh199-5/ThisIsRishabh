import React, { useEffect, useState } from "react";
import IntroViewCSS from '../styles/Intro.module.css';
import skyISTheLimitGIF from '../assets/skyISTheLimit.gif';
import classnames from "classnames";

const Intro = () => {
    const interests = [
        "a web developer .",
        "a fitness enthusiast .",
        "a dancer .",
        "a proud Indian ."
    ]
    const [visibleIndex,setVisibleIndex] = useState(0);
    const [containerWidth,setContainerWidth] = useState('1.5em');

    useEffect(() => {
        let innerInterval;
        let interval = setInterval(() => {
            setContainerWidth(`0px`);
            if(interests.length-1 === visibleIndex){
                setVisibleIndex(0);
            }else{
                setVisibleIndex(visibleIndex+1);
            }
        }, 2000);
        innerInterval = setInterval(() => {
            setContainerWidth(`${0.45*(interests[visibleIndex].length)}em`)
        },1000);
        return ()=>{
            clearInterval(innerInterval);
            clearInterval(interval);
        }
    },[interests]);

    return (
        <div className="intro">
            <div className={IntroViewCSS.middleBannerSection}>
                <h1 className = {IntroViewCSS.heading}>
                    <span className={IntroViewCSS.introView}>Rishabh Dangwal</span>
                    <br/>
                    <span className = "iama">I am </span> 
                    <span className = {IntroViewCSS.wrapper} style ={{width:containerWidth}}>
                        {
                            interests.map((interest,index) => (
                                <b className = {classnames({[`${IntroViewCSS.isHidden}`]:(index !== visibleIndex)},{[`${IntroViewCSS.isVisible}`]:(index ===visibleIndex)})} >{interest}</b>
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
