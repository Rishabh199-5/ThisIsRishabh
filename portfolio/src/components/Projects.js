import React,{ useState } from "react";
import classnames from "classnames";
import ProjectCSS from '../styles/Projects.module.css';
import pdfImg from '../assets/projects/pdf.png';
import posImg from '../assets/projects/pos.jpg';
import admissionImg from '../assets/projects/admission.jpeg';
import ecommerceImg from '../assets/projects/ecommerce.jpeg';
import websitesImg from '../assets/projects/websites.png';
import realTimeImg from '../assets/projects/realtime.jpeg';

const Projects = () => {

    const [filterIndex, setFilterIndex] = useState(0);
    const duration = 1000; // ms
    const delay = 500; // ms
    const animStr = (i) => `${ProjectCSS.fadeIn} ${duration}ms ease-out ${delay * i}ms forwards`;

    const projects = [
        { title: "Real Time Application for Collaborative Editing", tech: "js/angular/nodejs" , filters: [0,1,3,5],imgUrl: realTimeImg},
        { title: "Admissions", tech: "js/angular", filters: [0,1,2] ,imgUrl: admissionImg},
        { title: "Point of Sale", tech: "angular" , filters: [0,1] ,imgUrl: posImg},
        { title: "Ecommerce Applications", tech: "js/angular", filters: [0,1,2], imgUrl: ecommerceImg},
        { title: "Websites", tech: "angular" , filters: [0,1],imgUrl: websitesImg},
        { title: "Edit PDF on Web", tech: "reactjs/c++", filters: [0,4,5],imgUrl: pdfImg},
        { title: "UnEmbedded Fonts in PDF", tech: "js" , filters: [0,2],imgUrl: pdfImg},
        { title: "Acroforms in PDF", tech: "reactjs" ,filters: [0,5],imgUrl: pdfImg},
    ];
    const [projectsList, setProjectsList] = useState(projects);
    const filters = [
        { name: 'ALL' , value : 0 },
        { name: 'angular' , value : 1 },
        { name: 'javascript', value : 2},
        { name: 'nodejs', value : 3},
        { name: 'C++', value : 4},
        { name: 'reactjs' , value : 5},
    ]
    const setActiveFilter = (index) => {
        setFilterIndex(index);
        const currProjects = projects.map(project => {
            if(project.filters.indexOf(index) !==-1)
            return project;
        }).filter(ele => ele);
        setProjectsList(currProjects);
    }

    return (
        <div className={ProjectCSS.wrapper} >
            <div className={ProjectCSS.heading}>
                <span>Projects</span>
            </div>
            <div className="line-container">
                <span className="line"></span>
            </div>
            <div className={ProjectCSS.filterWrapper}>
                {filters.map((filter,index) => (
                    <span className = {classnames(ProjectCSS.filter,{[`${ProjectCSS.selectedFilter}`]:(filterIndex === index)})} onClick = {() => setActiveFilter(index)}>{filter.name}</span>
                ))}
            </div>
            <div className={ProjectCSS.gridContainer}>
            {
                projectsList.map((project,i) => (
                        <div className={ProjectCSS.project} style={{ animation: animStr(i) }}>
                            <div className = {ProjectCSS.card} style={{backgroundImage: `url(${project.imgUrl})`}}>
                            </div>
                            <div className={ProjectCSS.hoverContent}>
                                <div className={ProjectCSS.text}>{project.title}</div>
                                <div className={ProjectCSS.techHighLight}>{project.tech}</div>
                            </div>
                        </div>
                ))
            }
            </div>
        </div>
    );
};

export default Projects;
