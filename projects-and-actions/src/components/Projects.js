import React, { useState, useEffect } from "react"
import axios from "axios"
import ProjectCard from "./ProjectCard"

function Projects(props) {
    const [projects, setProjects] = useState([])
    const [id, setID] = useState()

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
                <div className="project" key={i} onClick={setID(project.id)}>
                <h2>{project.name}</h2>
                <p>{project.description}</p>
                <p>{project.completed.toString()}</p>
                </div>
            )
        })}
        </div>
        </>
    )
}

export default Projects