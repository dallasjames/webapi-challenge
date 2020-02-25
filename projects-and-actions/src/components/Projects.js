import React, { useState, useEffect } from "react"
import axios from "axios"
import { NavLink } from "react-router-dom"

function Projects(props) {
    const [projects, setProjects] = useState([])

    useEffect(() => {
        axios
            .get("http://localhost:8080/projects")
            .then(res => {
                console.log(res)
                setProjects(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    return(
        <>
        <h1>Projects</h1>
        <div className="projects">
        <br/>
        {projects.map(function(project, i) {
            return (
                <div className="project" key={i}>
                <h2>{project.name}</h2>
                <p>{project.description}</p>
                <p>{project.completed.toString()}</p>
                <NavLink to="/1">See Details</NavLink>
                </div>
            )
        })}
        </div>
        </>
    )
}

export default Projects