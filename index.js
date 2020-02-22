const express = require("express")
const projects = require("./data/routers/projects")
const actions =  require("./data/routers/actions")
const server = express()
const logger = require("./data/Middleware/logger")
const cors = require("cors")

server.use(express.json())
server.use(cors())
server.use(logger())

server.get("/", (req, res) => {
    res.status(200).json({
        message: "welcome the api"
    })
})

server.use("/actions", actions)
server.use("/projects", projects)

server.listen(8080, "127.0.0.1", () => {
    console.log("its up")
})