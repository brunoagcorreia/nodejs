const express = require("express");
let app = express();

app.set("view engine", "ejs");
app.set("views", __dirname + "views");

app.get('/', function(req, res){
    res.send("Hello");
});

app.listen(8080);
