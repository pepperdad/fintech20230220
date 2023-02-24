const express = require("express");
const app = express(); // respond with "hello world" when a GET request is made to the homepage

app.get("/", (req, res) => {
    console.log("사용자의 요청이 발생했습니다.");
    res.send("hello world");
});

app.listen(4000);