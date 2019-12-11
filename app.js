const express = require("express");
let app = express();
let bodyParser = require("body-parser")

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

app.use(bodyParser.json()); // to support Json encoded bodies
app.use(bodyParser.urlencoded({ 
    extended: true
})); //

app.get('/', function(req, res){
    res.send("Hello");
});

app.get('/eingabe', function(req, res){
    res.render('eingabe');
});

app.post('/db_input', function(req, res){
    console.log(req.body);
    // let erg = req.body.vorname
    // let erg2 = req.body.nachname

    res.render("db_input", {vorname: req.body.vorname})
});

app.listen(8080);
