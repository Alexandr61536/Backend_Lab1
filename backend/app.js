const express = require('express')
const path = require("node:path");
const app = express()
const port = 3010
app.use("/", express.static(path.resolve("./frontend")));

app.listen(port, () => {
    console.log(`Placeholder is set`)
})