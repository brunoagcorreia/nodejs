const express = require("express");
let bodyParser = require("body-parser")
let models = require("./models");
let faker = require("faker")

let app = express();

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

app.use(bodyParser.json()); // to support Json encoded bodies
app.use(bodyParser.urlencoded({ 
    extended: true
})); //

models.Person.sync({force: true}).then(function() {
    console.log("Tabelle wurde erstellt");
});

app.get('/', function(req, res){
    res.send("Hello");
});

app.get('/eingabe', function(req, res){
    res.render('eingabe');
});

app.post('/db_input', function(req, res){
    // console.log(req.body);
    // console.log(faker.fake("{{internet.domainName}}"))
 
    // faker integration
    for (var i = 1; i <= 20; ++i) {
        let vn = faker.fake("{{name.firstName}}");
        let nn = faker.fake("{{name.lastName}}");
        let em = vn + "." + nn + "@" + faker.fake("{{internet.domainName}}");
        models.Person.create({
            vorname: vn, 
            nachname: nn, 
            email: em.toLowerCase().replace("'", ""),
            iban: faker.fake("{{finance.iban}}"),
        });
    }

 
    res.render("result", {vorname: req.body.vorname, nachname: req.body.nachname, email: req.body.email})
});

app.listen(8080);
