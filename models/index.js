//module fuer kommunikation mit der Datenbank
const Sequelize = require("sequelize");


// definiert die Datenbank Verbindung
// dialect: angabe mit welcher Datenbank gearbeitet wird
// storage Pfad zur Datenbank
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: __dirname + './../database.sqlite'
});

//Definiert eine Tabelle in der DB
// Tabelle: Person
// Spalten: vorname, nachname, email
let Person = sequelize.define("person", {
  vorname: {
      type: Sequelize.STRING,
      field: "vorname"
  },
  nachname: {
      type: Sequelize.STRING,
      field: "nachname"
  },
  email: {
      type: Sequelize.STRING,
      field: "email"
  },
  iban: {
    type: Sequelize.STRING,
    field: "iban"
},
});

// export funktion
module.exports = {
  sequelize,
  Person
}