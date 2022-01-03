import React from "react";
import AboutCSS from '../styles/AboutMe.module.css';
import rish from '../assets/rish.jpg';

const AboutMe = () => {
  const aboutContent = ["Hi I am Rishabh Dangwal, a 26 year old Web developer, Fitness Enthusiast, and a Dance lover living in Dehradun, India. I am a Computer Science Engineer, currently working with awesome folks at Adobe.", "Have a look at my YouTube Channel, skills or just connect with me on LinkedIn. I am always excited to do business with like minded people, lets discuss over coffee."]
  const socialLinks = [
    { icon: "fa fa-linkedin", link: "https://www.linkedin.com/in/rishabh-dangwal-706550103" },
    { icon: "fa fa-facebook-f", link: "https://facebook.com/rishabh.dangwal.94" },
    { icon: "fa fa-instagram", link: "https://www.instagram.com/rishabhdangwal/" }
  ];
  return (
    <div className={AboutCSS.wrapper}>
      <div className={AboutCSS.leftPnl}>
        <div className={AboutCSS.imageWrapper}>
          <div className={AboutCSS.rishPic} style={{
            backgroundImage: `url(${rish})`
          }} />
        </div>
        <div className={AboutCSS.top}>
          {
            socialLinks.map((socialLink) => (
              <a className={AboutCSS.social} href={socialLink.link} target="_blank">
                <i className={socialLink.icon} />
              </a>
            ))
          }
        </div>
      </div>
      <div className={AboutCSS.rightPnl}>
        <h1 className={AboutCSS.heading}>About me.</h1>
        {
          aboutContent.map((content) => (<p>{content}</p>))
        }
      </div>
    </div>
  );
};

export default AboutMe;
