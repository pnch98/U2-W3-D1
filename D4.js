/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const area = function (x = 11, y = 12) {
  return x * y;
};
console.log("Es. 1: ", area());

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const crazySum = function (x = 2, y = 3) {
  if (x !== y) {
    return x + y;
  }
  return (x + y) * 3;
};
console.log("Es. 2: ", crazySum());

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const crazyDiff = function (x = 5) {
  if (x <= 19) {
    return 19 - x;
  }
  return (x - 19) * 3;
};
console.log("Es. 3: ", crazyDiff());

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function boundary(n = 46) {
  return (n <= 100 && n > 20) || n === 400;
}
console.log("Es. 4: ", boundary());
/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function epify(string = "Buonasera a tutti") {
  const newstr = string.split(" ");
  if (newstr[0].toUpperCase !== "EPICODE") {
    return "EPICODE " + string;
  }
  return string;
}
console.log("Es. 5: ", epify());
/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const check3and7 = function (x = 5) {
  return x % 3 === 0 || x % 7 === 0;
};
console.log("Es. 6: ", check3and7());
/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const reverseString = function (string = "Salve salvino") {
  let newstr = "";
  for (let i = string.length - 1; i >= 0; i--) {
    newstr += string.charAt(i);
  }
  return newstr;
};
console.log("Es. 7: ", reverseString());
/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function upperFirst(string = "tutto minuscolo perché sì") {
  let newstr = string.split(" ");
  string = "";
  newstr.forEach((word) => {
    const upChar = word.charAt(0).toUpperCase();
    const fullWord = word.slice(1);
    string += upChar + fullWord + " ";
  });
  return string;
}
console.log("Es. 8: ", upperFirst());
/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function cutString(string = "Salve salvini") {
  return string.slice(1, -1);
}
console.log("Es. 9: ", cutString());
/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function giveMeRandom(n = 5) {
  let array = [];
  for (i = 0; i < n; i++) {
    array.push(Math.round(Math.random() * 10));
  }
  return array;
}
console.log("Es. 10: ", giveMeRandom());
