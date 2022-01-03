import React, { useEffect, useRef, useState } from "react";
import SkillsCSS from '../styles/Skills.module.css';
import downloadImage from '../assets/dwnld.png';
import dwnldDoneImage from '../assets/dwnlddone.gif';

const Skills = () => {
  const skills = [{ name: "html", rate: "90%" }, { name: "css", rate: "85%" }, { name: "angular", rate: "85%" }, { name: "reactjs", rate: "90%" }, { name: "javascript", rate: "75%" }, { name: "Design", rate: "60%" }, { name: "Data structures", rate: "75%" }, { name: "Problem Solving", rate: "75%" }];
  const [currImageUrl, setCurrImgUrl] = useState(downloadImage);
  const containerRef = useRef(null);
  const ref = useRef(null);
  const imageOnClickHandler = () => {
    setCurrImgUrl(dwnldDoneImage);
  }
  const callBackFn = (entries) => {
    const [ entry ] = entries;
    if(entry.isIntersecting){
      if (ref && ref.current) {
        Array.prototype.forEach.call(ref.current.children, (child, index) => {
          child.firstChild.style.maxWidth = skills[index].rate;
        });
      }
    }
  }


  useEffect(() => {
    let options = {
      rootMargin: '0px',
      threshold: 1.0
    }
    
    let observer = new IntersectionObserver(callBackFn, options);
    if(containerRef.current){
      observer.observe(containerRef.current);
    }
    return () => {
      if(containerRef.current){
        observer.unobserve(containerRef.current)
      }
    }
  }, [])

  return (
    <div className={SkillsCSS.wrapper} ref= {containerRef}>
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
