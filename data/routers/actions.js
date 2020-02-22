const express = require("express")
const action = require("../helpers/actionModel")

const router = express.Router()

router.get('/', (req, res) => {
    action.get()
        .then(data => res.status(200).json(data))
        .catch(err => res.status(500).json({ message: 'Could not get actions from the database' }));
});

router.get("/:id", (req, res) => {
    let id = req.params.id
    action.get(id)
        .then(project => res.status(200).json(project))
        .catch(err => res.status(500).json({error: "internal error come back later"}))
})

router.post('/:id', (req, res) => {
    const project_id = req.params.id
    action.insert(req.body, project_id)
        .then(data => res.status(200).json(data))
        .catch(err => res.status(500).json({ message: 'Could not create action' }));
});

router.delete("/:id", (req, res) => {
    let id = req.params.id
    action.remove(id)
        .then(removed => res.status(204).json(removed))
        .catch(err => res.status(500).json({error: "not working"}))
})

router.put("/:id", (req, res) => {
    let id = req.params.id
    action.update(id, req.body)
        .then(project => res.status(200).json(project))
        .catch(err => res.status(500).json({error: err}))
})

module.exports = router