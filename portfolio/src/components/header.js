import React,{ useEffect, useState } from "react";
import classnames from "classnames";
import HeaderCSS from '../styles/Header.module.css';

const Header = () => {
    const [prevScrollpos, setPrevScrollpos] = useState();
    const [isHeaderVisible, setIsHeaderVisible] = useState(true);

    const handleScroll = () => {
        const currentScrollPos = window.pageYOffset;
        setPrevScrollpos(currentScrollPos);
        if(isHeaderVisible){
            setIsHeaderVisible(prevScrollpos > currentScrollPos);
        }
    };
    const headerItems = [
        "about",
        "skills",
        "quotes",
        "coffee"
    ]
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', () => handleScroll);
        };
      }, []);
    return (
    <ul className = {classnames(HeaderCSS.headerView,{[`${HeaderCSS.navUp}`]:!isHeaderVisible})}>
        {
            headerItems.map(item => (<li className = {HeaderCSS.item}><a href = {`#${item}`}>{item}</a></li>))
        }
    </ul>
    );
};

export default Header;
