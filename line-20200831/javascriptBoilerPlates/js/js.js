/**
 * file: js.js
 * purpose: interactivity
 **/
console.log('JavaScript from js/js.js: up and running!');


document.write("<h1>Hello world</h1>");

/**
* JavaScriptets Byggeklodser
**/

// gammeldags måde at skrive var på
var magi = "Hokus pokus filiokus filihankat";
var markup = "<em>";
var markupX = "</em>";

// mere moderne måde til var er 
let citat = ' "Jylland mellem tvende have." ';

// hvis en værdi ikke ændres
const navn = "<br>H.C Andersen (1805-1875)"

document.write(markup + citat + navn + markupX)

// JS kan også regne
let a = 2;
let b = 777;
// let c = "777";
let c = a * b;
console.log(c);

let d = c + 333;
console.log(d);

// data typer: number, string, objekter

var cars = [
    "Saab",
    "Volvo",
    "BMW"
    "Citroën",
    "Tesla",
    "Hyundai",
    "Renault",
    "Jensen",
    "Rover",
    "Jaguar"
];

let husk = [
    "Ost",
    "Benzin",
    "Tjek trafik inden vi kører"
];

// korte kodelinjer er lettere at forstå ...
document.write(
    "<p>" + 
    husk[0] + 
    "</p>"
);

// LOOP ...
//for (
//let i = 0; =====> variabel
//i<3; ===========> betingelse som stopper loopet når det er nået 
//i++ ============> tæller, ++ lægger en til værdien af i
document.write( "<ul>" );

for (let i = 0; i<cars.length; i++){
    document.write("<li>" + cars[i] + "</li>");
}

document.write( "</ul>" );



// Tjek at DOM er indlæst
//window.onload(function () {
    // ... your code here ...
    
    // ... end ...
//});
