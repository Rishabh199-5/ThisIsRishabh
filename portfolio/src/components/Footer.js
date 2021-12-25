import React, { Fragment } from "react";
import FooterCSS from '../styles/Footer.module.css';

const Footer = () => {
  const socialLinks = [
    {icon:"fa fa-linkedin",link:"https://www.linkedin.com/in/rishabh-dangwal-706550103"},
    {icon:"fa fa-facebook-f",link:"https://facebook.com/rishabh.dangwal.94"},
    {icon:"fa fa-instagram",link:"https://www.instagram.com/rishabhdangwal/"}
  ];
  const moveToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
    }
  return (
    <Fragment>
    <div className = {FooterCSS.curve}>

    </div>
    <div className = {FooterCSS.container}>
      <div className = {FooterCSS.topIcon}>
      <i className = "fa fa-angle-double-up" onClick={moveToTop}/>
      
      </div>

      <div className={FooterCSS.content}>
        <div className={FooterCSS.top}>
          {
            socialLinks.map((socialLink) => (
              <a className={FooterCSS.social} href={socialLink.link} target="_blank">
                <i className={socialLink.icon} />
              </a>
            ))
          }
        </div>
        <div className={FooterCSS.down}>
          RISHABH DANGWAL ©2022
        </div>
      </div>
    </div>
    </Fragment>
  );
};

export default Footer;
