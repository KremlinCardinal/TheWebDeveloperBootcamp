var express = require("express");
var app = express();

const axios = require("axios");

app.set("view engine", "ejs");

app.get("/", function (req, res) {
    res.render("search");
});

app.get("/results", async (req, res) => {
    var query = req.query.search;
    try {
        const response = await axios.get("http://www.omdbapi.com/?s=" + query + "&apikey=thewdb");
        res.render("results", { data: response.data });
    } catch (err) {
        console.log(err);
    }
});

app.listen(3000, function () {
    console.log("Server listening on port 3000");
});