//Dimmi il tuo nome

var nome = prompt ("Dimmi il tuo nome")

console.log(nome);

//Dimmi il tuo cognome

var cognome = prompt ("Dimmi il tuo cognome")

console.log(cognome);

//Dimmi il tuo colore preferito

var colore = prompt ("Dimmi il tuo colore preferito")

console.log(colore);

//Mostra password nel DOM in elemento con id password

document.getElementById('password').innerHTML = nome + cognome + colore + "21";
