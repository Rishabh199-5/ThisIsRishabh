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
        { title: "Real Time Application for Collaborative Editing", tech: "js/angular/nodejs" , filters: [0,1,3,5],imgUrl: realTimeImg , content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged"},
        { title: "Admissions", tech: "js/angular", filters: [0,1,2] ,imgUrl: admissionImg, content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged"},
        { title: "Point of Sale", tech: "angular" , filters: [0,1] ,imgUrl: posImg ,content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged"},
        { title: "Ecommerce Applications", tech: "js/angular", filters: [0,1,2], imgUrl: ecommerceImg, content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged"},
        { title: "Websites", tech: "angular" , filters: [0,1],imgUrl: websitesImg, content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged"},
        { title: "Edit PDF on Web", tech: "reactjs/c++", filters: [0,4,5],imgUrl: pdfImg, content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged"},
        { title: "UnEmbedded Fonts in PDF", tech: "js" , filters: [0,2],imgUrl: pdfImg, content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged"},
        { title: "Acroforms in PDF", tech: "reactjs" ,filters: [0,5],imgUrl: pdfImg, content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged"},
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
                                <div className={ProjectCSS.content}>{project.content}</div>
                            </div>
                        </div>
                ))
            }
            </div>
        </div>
    );
};

export default Projects;
