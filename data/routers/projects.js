const express = require("express")
const project = require("../helpers/projectModel")

const router = express.Router()

router.get("/", (req, res) => {
    project.get()
        .then(projects => res.status(200).json(projects))
        .catch(err => res.status(500).json({error: "internal error please wait"}))
})

router.get("/:id", (req, res) => {
    let id = req.params.id
    project.get(id)
        .then(project => res.status(200).json(project))
        .catch(err => res.status(500).json({error: "its still not working"}))
})

router.get('/:id/actions', (req, res) => {
    project.getProjectActions(req.params.id)
        .then(data => res.status(200).json(data))
        .catch(err => res.status(500).json({error: "i screwed up"}));
});

router.post("/", (req, res) => {
    project.insert(req.body)
        .then(project => res.status(201).json(project))
        .catch(err => res.status(500).json({error: "i fix later"}))
})


router.delete("/:id", (req, res) => {
    project.remove(req.params.id)
    .then(project => res.status(204).json(project))
    .catch(err => res.status(500).json({error: "it didnt work"}))
})

router.put("/:id", (req, res) => {
    let id = req.params.id
    project.update(id, req.body)
        .then(project => res.status(200).json(project))
        .catch(err => res.status(500).json({error: "not finsihed yet"}))
})

module.exports = router