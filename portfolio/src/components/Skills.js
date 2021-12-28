import React, { useEffect, useRef, useState } from "react";
import SkillsCSS from '../styles/Skills.module.css';
import downloadImage from '../assets/dwnld.png';
import dwnldDoneImage from '../assets/dwnlddone.gif';

const Skills = () => {
  const skills = [{ name: "html", rate: "90%" }, { name: "css", rate: "85%" }, { name: "angular", rate: "85%" }, { name: "reactjs", rate: "90%" }, { name: "javascript", rate: "75%" }, { name: "Design", rate: "60%" }, { name: "Data structures", rate: "75%" }, { name: "Problem Solving", rate: "75%" }];
  const [currImageUrl, setCurrImgUrl] = useState(downloadImage);
  const ref = useRef();
  const imageOnClickHandler = () => {
    setCurrImgUrl(dwnldDoneImage);
  }

  useEffect(() => {
    setTimeout(() => {
      if (ref && ref.current) {
        Array.prototype.forEach.call(ref.current.children, (child, index) => {
          child.firstChild.style.maxWidth = skills[index].rate;
        });
      }
    }, 1000);
  }, [])

  return (
    <div className={SkillsCSS.wrapper}>
      <div className={SkillsCSS.leftPnl}>
        <p className={SkillsCSS.heading}>Download my Resume</p>
        <div className={SkillsCSS.imageWrapper}>
          <img src={currImageUrl} onClick={imageOnClickHandler} />
        </div>
      </div>
      <div className={SkillsCSS.rightPnl}>
        <div className={SkillsCSS.skills} ref={ref}>
          {skills.map((skill) => (
            <div className={SkillsCSS.bar}>
              <div className={SkillsCSS.skill}></div>
              <div className={SkillsCSS.name}>{skill.name}</div>
              <span className={SkillsCSS.rate}>{skill.rate}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
