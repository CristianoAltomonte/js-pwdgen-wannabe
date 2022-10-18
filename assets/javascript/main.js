/*--------------ESERCIZIO------------------*/

/* 
Generiamo una password composta da:
Chiedi all’utente il suo nome,
poi chiedi il suo cognome,
poi chiedi il suo colore preferito
aggiungiamo alla fine un numero
Infine scriviamo sulla pagina "la tua password insicurissima è: nomecognomecolorepreferito21" 
*/
 
let name = prompt('Whats your name ?');
console.log(name);

let surname = prompt('Whats your surname ?');
console.log(surname);

let color = prompt('Whats your favourite colour ?');
console.log(color);

const number = '26';

document.getElementById('fraseJavascript').innerHTML = `la tua password insicurissima è : ${name + surname + color + number} ` 
