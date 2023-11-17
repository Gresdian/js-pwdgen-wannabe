let first_name = prompt('Inserisci il tuo nome');
console.log(first_name);

let surname = prompt('inserisci il tuo cognome');
console.log(surname);

let favourite_color = prompt('inserisci il tuo colore preferito');
console.log(favourite_color);

let union = (first_name) + (surname) + (favourite_color) + '23' ;

document.getElementById('message').innerHTML = union;

console.log(union);
