//alert('ciao')

// MAIL ACCESSO
var mails = ['pippo@mail.it', 'pluto@mail.com', 'paperino@mail.it', 'paperino@mail.com', 'topolino@mail.it'];
console.log(mails);


// MAIL UTENTE
var mailUtente = prompt('Inserisci la tua mail');
console.log(mailUtente);
console.log(ciccio);

//CONFRONTO MAIL
var mailCheck = false;
for (var i=0; i < mails.length; i++) {
  var mail = mails[i];
  if (mailUtente == mail) {
    mailCheck = true;
  }
}
console.log(mailCheck);
if (mailCheck == false) {
  console.log('Accesso negato! registrarsi per accedere');
}
else {
  console.log('Cliente registrato! Ciao bentornato');
}
