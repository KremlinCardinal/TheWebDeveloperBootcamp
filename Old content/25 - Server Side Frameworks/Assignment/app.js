var express = require("express");
var app = express();

app.get("/", function (req, res) {
    res.send("Hi there, welcome to my assignment!");
});

app.get("/speak/:animal", function (req, res) {
    var sounds = {
        pig: "Oink",
        cow: "Moo",
        dog: "Woof Woof!"
    };

    var animal = req.params.animal.toLowerCase();
    var sound = sounds[animal];

    if (sound === undefined) {
        res.redirect("/404");
    } else {
        res.send("The " + animal + " says '" + sound + "'");
    }
});

app.get("/repeat/:msg/:count", function (req, res) {
    var msg = req.params.msg;
    var count = Number(req.params.count);

    var content = "";
    for (var i = 0; i < count; i++) {
        content += msg + " ";
    }

    res.send(content);
});

app.get("*", function (req, res) {
    res.send("Sorry, page not found... What are you doing with your life?");
});

app.listen(3000, function () {
    console.log("Server running on port 3000");
});