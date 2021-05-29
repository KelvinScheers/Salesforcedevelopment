let Randomnumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(Randomnumbers [4]);


let Fruit = ["Appel", "Peer", "Mango", "Aardbei", "Perzik"];

console.log(Fruit [3]); // opdracht 3 = waarde 0 opdracht 4 staat nu goed.


let totaal = (Math.round(Math.random() * 7)) % 5;
console.log(totaal + " = resultaat = " + Fruit[totaal]);

// de push methode voegt 1 of meerdere elementen toe aan het einde van een array.( in dit geval Mandarijn)


Fruit.push("Mandarijn");
console.log(Fruit [5]);

// de pop methode returned en verwijderd het laatste element van een array.

console.log(Fruit.pop())

// de Shift methode verwijderd het eerste element van een array.

console.log(Fruit.shift());
console.log(Fruit[0]);//dit is nu peer ipv appel.

// de Slice methode zorgt er voor dat een kopie van een array in een nieuwe array terechtkomt.

console.log(Fruit.slice(1,3)); // Mango/Aarbei.

// De Splice methode voegt/verwijderd elementen bij/van een array.

Fruit.splice(2, 4, "Citroen", "Kiwi");
console.log(Fruit);
  
//De Sort methode sorteert de elementen van een array. (bijvoorbeeld hoogste waarde naar laagste waarde).

Fruit.sort();
console.log(Fruit); //Fruit is nu op alfabet gesorteerd :) 

//Length functie.

console.log(Fruit.length);// Length is 4.


//8
// Ik zou dit doen met Splice. Zie opdracht hierboven hoe je dit doet alleen zou je dan peer moeten vervangen :) 

// Opdracht 9 (ik heb dan mango en kiwi gebruikt , in de console zie je dat ze verwisseld zijn).

let opdracht9 = Fruit[1];
Fruit[1] = Fruit[2];
Fruit[2] = opdracht9;
console.log(Fruit);