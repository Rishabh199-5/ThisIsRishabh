import React from "react";
import AboutCSS from '../styles/AboutMe.module.css';
import rish from '../assets/rish.jpg';

const Interest = () => {
  const aboutContent = ["Hi I am Rishabh Dangwal, a 26 year old Web developer, Fitness Enthusiast, and a Dance lover living in Dehradun, India. I am a Computer Science Engineer, currently working with awesome folks at Adobe.","Have a look at my YouTube Channel, skills or just connect with me on LinkedIn. I am always excited to do business with like minded people, lets discuss over coffee."]
  return (
    <div className={AboutCSS.wrapper}>
      <div className={AboutCSS.leftPnl}>
        <div className = {AboutCSS.rishPic} style = {{
          backgroundImage:`url(${rish})`
        }}/>
      </div>
      <div className={AboutCSS.rightPnl}>
        <h1 className = {AboutCSS.heading}>About me.</h1>
        {
          aboutContent.map((content) => (<p>{content}</p>))
        }
      </div>
    </div>
  );
};

export default Interest;
