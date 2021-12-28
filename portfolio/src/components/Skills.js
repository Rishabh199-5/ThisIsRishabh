import React, { useState } from "react";
import SkillsCSS from '../styles/Skills.module.css';
import downloadImage from '../assets/dwnld.png';
import dwnldDoneImage from '../assets/dwnlddone.gif';

const Skills = () => {
  const [currImageUrl, setCurrImgUrl] = useState(downloadImage);
  const imageOnClickHandler = () => {
    setCurrImgUrl(dwnldDoneImage);
  }
  return (
    <div className={SkillsCSS.wrapper}>
      <p className = {SkillsCSS.heading}>Download my Resume</p>
      <div className = {SkillsCSS.imageWrapper}>
        <img src={currImageUrl} onClick={imageOnClickHandler} />
      </div>
    </div>
  );
};

export default Skills;
