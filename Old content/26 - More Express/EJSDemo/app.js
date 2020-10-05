var express = require("express");
var app = express();

app.use(express.static("public")); /* Stelt de root in op de public map o.a. voor css-link-tags */
app.set("view engine", "ejs"); /* Sets default render file-type to .ejs */

/* ROUTES */
app.get("/", function (req, res) {
    res.render("home"); /* Geen file-type omdat default = .ejs */
});

app.get("/fallinlovewith/:thing", function (req, res) {
    var thing = req.params.thing;

    res.render("love.ejs", { thingVar: thing });
});

app.get("/posts", function (req, res) {
    var posts = [
        { title: "Post 1", author: "Susy" },
        { title: "My adorable pet bunny", author: "Charlie" },
        { title: "Can you believe this pomsky?", author: "Colt" }
    ];

    res.render("posts", { posts: posts });
});

/* START SERVER */
app.listen(3000, function () {
    console.log("Server running on port 3000");
});