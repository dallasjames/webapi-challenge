import React, { useState, useEffect } from "react"
import axios from "axios"

function ProjectCard(props) {
    const [card, setCard] = useState([])
    const { match: { params } } = props
    useEffect(() => {
        axios
            .get(`http://localhost:8080/projects/${params.id}`)
            .then(res => {
                console.log(res)
                setCard(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])
    return (
        <>
        <h1>Project Details</h1>
        <h2>{card.name}</h2>
        <h2>{card.description}</h2>
        </>
    )
}

export default ProjectCard