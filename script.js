// var
/*
var altura = 5;
var comprimento = 7;

area = altura * comprimento; // node identificar e criar o var antes da area, e resultado sai correto. mais não e certo não usar o var ou let ou const.

console.log(area);

var area; // tbm pode usar assim, mais pode trazer muito problemas.
*/

// let
/*
let forma = "retangulo"
let altura = 5;
let comprimento = 7;
let area;

if (forma === "retangulo") {
      area = altura * comprimento; 
} else {
      area = altura * comprimento / 2;
}

console.log(area);
//let area; // vai constar erro o Let tem q estar antes do if.
*/

// const

const forma = "retangulo"
const altura = 5;
const comprimento = 7;
let area; //const area; => tem que ter um valor para começar, no caso usar let

if (forma === "retangulo") {
      area = altura * comprimento; 
} else {
      area = altura * comprimento / 2;
}

console.log (area); //resultado deu 35 sem mesmo sem chamar a const area;

// tipagem dinâmica

let minhaVar = 567;
minhaVar = "texto"
