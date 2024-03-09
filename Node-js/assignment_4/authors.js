const express = require('express')
const router = express.Router()

router.get("/", (req, res) => {
    res.send('List of authors')
})

router.put("/create", (req, res) => {
    res.send('Author entry created successfully.')
})

router.post("/update", (req, res) => {
    res.send('author list updated successfully')
})

router.delete("/delete", (req, res) => {
    res.send('author deleted successfully')
})

module.exports = router;