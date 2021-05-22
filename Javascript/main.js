let getal1 = "tekst";

console.log ("getal1" + getal1);

const getal2 = "test";

console.log("getal2" + getal2);

const getal22 = 50;

console.log("getal22" + getal22); //dit gaat niet omdat er al een getal2 is. vandaar dat ik het getal22 heb genoemd.

let getal3 = 5;
console.log("getal3" + getal3);

let datatype = true;

console.log("dataype" + typeof datatype);

// let datatype = "";

// console.log("dataype" + typeof datatype);

//let datatype = 1;

//console.log("dataype" + typeof datatype);

//let datatype = 5n;

//console.log("dataype" + typeof datatype);

//let datatype = Symbol("Sym");

//console.log("dataype" + typeof datatype);

let x = 6;
let y = 8;
console.log(x + y);

//vervolg van de opdracht console.log(x - y);

//console.log (x * y);

//console.log (x / y);

let a = 3;
let b = 5;
let c = 10;
let d = 2; 

console.log(a + b * c / d);

let numberr=3;
numberr++;

// als ik number naar number-- verander is de uitkomst 2.

console.log(numberr);

let number = 3;
const sum = ++number +2;
console.log(sum);
// het is het getal 5. bij de volgende opdracht zet je de ++ voor number , de uitkomst van deze som is : 6

let numberrr = 3;
numberrr += 4;
console.log(numberrr);

// uitkomst van deze som is 7. Een andere manier om de som te schrijven is : let numberrr = 3; let bep = 4; console.log(numberrr + bep);
// Dit is echter uitgebreider en de eerste optie is makkelijker.

let numberrrr = 3;
numberrrr += 4;
numberrrr -= 2;
numberrrr /= 5;
numberrrr *= 4;
console.log(numberrrr);

// de uitkomst is 4.


let Voornaam = "Voornaam";
let Achternaam = "Achternaam";

console.log(Voornaam + Achternaam);
// de namen zitten aan elkaar vast, verder valt mij niet heel veel op.

let nieuw = "3";
let nieuw2 = 3;

let combinedText = nieuw + nieuw2; 

console.log(combinedText);

// 33 geprint.. 

// Opdracht 14 : Het is handig om een single quote te gebruiken als je javascript gebruikt in combi met HTML , als je altijd een single quote gebruikt voor JS en een dubbele voor HTML heb je minder kans dat je een fout maakt in je code.
// voorbeeld : const div = '<div class="panel">voorbeeld</div>'


let text = "text";
text += "another text";
console.log(text); 
// printuitslag : textanother text
// Je zou het eventueel ook zou kunnen schrijven : let text = "text" + "another text"; console.log(text);


// BUILT IN METHODS, 1ste is charAt(), deze method geeft het karakter weer wat wordt aangegeven, dus zoals je in het voorbeeld ziet staat hij nu op 0, dat houdt in dat hij de letter H weergeeft maar stel je zet de charAt op (7) dan geeft hij de letter o weer in je console.

const mystr = "hello world";
result = mystr.charAt(0);
console.log(result);

//de 2de is concat() deze plakt zoals je in het voorbeeld zit , de Strings aan elkaar vast.

const voorbeeld2 = "herman";
const voorbeeld22 = "brood";
console.log(voorbeeld2.concat(voorbeeld22));

//de 3de is slice() deze brengt de geselecteerde elementen in een Array terug in een nieuwe Array Object. ( in dit geval 1 tot en met 4)

const fruit = ["banaan", "appel", "perzik", "mango", "peer"];
const lekker = fruit.slice(1, 4);
console.log (fruit + " " +lekker);

