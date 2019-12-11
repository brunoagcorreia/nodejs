const express = require("express");
let app = express();

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

app.get('/', function(req, res){
    res.send("Hello");
});

app.get('/eingabe', function(req, res){
    res.render('eingabe');
})

app.listen(8080);
