import React,{ useState } from "react";
import classnames from "classnames";
import ProjectCSS from '../styles/Projects.module.css';

const Projects = () => {

    const [filterIndex, setFilterIndex] = useState(0);
    const projects = [
        { title: "Real Time Application for Collaborative Editing", tech: "js/angular/nodejs" , filters: [0,1,3,5]},
        { title: "Admissions", tech: "js/angular", filters: [0,1,2] },
        { title: "Point of Sale", tech: "angular" , filters: [0,1]},
        { title: "Ecommerce Applications", tech: "js/angular", filters: [0,1,2] },
        { title: "Websites", tech: "angular" , filters: [0,1]},
        { title: "Edit PDF on Web", tech: "reactjs/c++", filters: [0,4,5] },
        { title: "UnEmbedded Fonts in PDF", tech: "js" , filters: [0,2]},
        { title: "Acroforms in PDF", tech: "reactjs" ,filters: [0,5]},
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
                projectsList.map((project) => (
                        <div className={ProjectCSS.project}>
                            <div className="card">
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
