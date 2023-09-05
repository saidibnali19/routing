const express = require("express")

const port = 3000

const app = express()

app.get("/", (req, res) => {
    res.send("Got a GET request")
})

app.post("/", (req, res) => {
    res.send("Got a POST request")
})

app.put("/", (req, res) => {
    res.send("Got a PUT request")
})

app.delete("/", (req, res) => {
    res.send("Got a DELETE request")
})

app.listen(port, () => console.log(`Server running at http://localhost:${port}`))