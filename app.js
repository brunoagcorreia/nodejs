// import Modul: Webserver (Express), POST encoder (body-parser)
const express = require("express");
const bodyParser = require("body-parser");
let models = require("./models");

// Webserver inistialisieren
let app = express();



// benutze die Funktion JSON & URLencoder von body-parser, 
// um POST Daten auszulesen und in eine JSON Objekt umzuwandeln
app.use(bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 

models.Person.sync({force: true}).then(function() {
    console.log("Tabelle wurde erstellt");
    

});
// Benutze EJS Interpreter um JS in 
// HTML File Serverseitig zu verarbeiten
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

// Routing: definiert das Weiterleiten bzw. Aktion
// beim Aufruf einer bestimmen URL 
// .get - bei Aufruf der GET Methode
// .post - bei Aufruf der POST Methode
app.get('/', function(req, res){
    res.send("Hallo");
});

app.get('/eingabe', function(req, res){
    res.render("eingabe");
});

app.post('/db_input', function(req, res){
    console.log(req.body);
    console.log(models.sequelize);
    models.Person.create({			// Eintrag in Tabelle einfügen
        vorname: req.body.vorname,
        nachname: req.body.nachname,
        email: req.body.email,
        })
   res.redirect("/db_output") ;
});

app.get('/db_output', function(req, res){
    models.Person.findAll({
        where: {
            id: 1
        }
    }).then(function(obj){
        console.log(obj[0].dataValues.vorname)
        res.render("ausgabe", {person: obj[0].dataValues});
    });
        
})

app.listen(8080);