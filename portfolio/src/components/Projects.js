import React from "react";
import ProjectCSS from '../styles/Projects.module.css';

const Projects = () => {
    const projects = [
        { title: "Real Time Application for Collaborative Editing", tech: "js/angular/nodejs" },
        { title: "Admissions", tech: "js/angular" },
        { title: "Point of Sale", tech: "angular" },
        { title: "Ecommerce Applications", tech: "js/angular" },
        { title: "Websites", tech: "angular" },
        { title: "Edit PDF on Web", tech: "reactjs/c++" },
        { title: "UnEmbedded Fonts in PDF", tech: "js" },
        { title: "Acroforms in PDF", tech: "reactjs" },
    ];
    const filters = [
        { name: 'reactjs' },
        { name: 'angular' },
        { name: 'javascript' },
        { name: 'nodejs' },
    ]
    return (
        <div className={ProjectCSS.wrapper} >
            <div className={ProjectCSS.heading}>
                <span>Projects</span>
            </div>
            <div className="line-container">
                <span className="line"></span>
            </div>
            <div className={ProjectCSS.filterWrapper}>
                {filters.map((filter) => (
                    <span className={ProjectCSS.filter}>{filter.name}</span>
                ))}
            </div>
            <div className={ProjectCSS.gridContainer}>
            {
                projects.map((project) => (
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
