const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("Hello, this is a reverse-engineering demo!");
});

app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});