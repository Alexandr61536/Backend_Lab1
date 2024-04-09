const express = require('express')
const path = require("node:path");
const app = express()
const port = 3010
app.use("/", express.static(path.resolve("../frontend/build")));
app.use(express.json());

app.listen(port, () => {
    console.log(`Placeholder is set`)
})

app.post("/api/form_request", (req, res)=>{
    console.log(req.body)
    res.json({body: req.body})
    return
})