//Dimmi il tuo nome

var nome = prompt ("Dimmi il tuo nome")

console.log(nome);

//Mostra nome nel DOM in elemento con id name

document.getElementById('name').innerHTML = nome;

//Dimmi il tuo cognome

var cognome = prompt ("Dimmi il tuo cognome")

console.log(cognome);

//Mostra cognome nel DOM in elemento con id surname

document.getElementById('surname').innerHTML = cognome;

//Dimmi il tuo colore preferito

var colore = prompt ("Dimmi il tuo colore preferito")

console.log(colore);

//Mostra colore preferito nel DOM in elemento con id color

document.getElementById('color').innerHTML = colore;

//Mostra password nel DOM in elemento con id password

document.getElementById('password').innerHTML = nome + cognome + colore + "21";
