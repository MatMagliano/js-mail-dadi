//alert('ciao')

//DADO1
var dadoUno = Math.floor(Math.random() * 6) + 1;
console.log(dadoUno);

// DADO2
var dadoDue = Math.floor(Math.random() * 6) + 1;
console.log(dadoDue);

// GIOCATORE1

var giocatoreUno = (dadoUno + dadoDue)
console.log(giocatoreUno);

//DADO3
var dadoTre = Math.floor(Math.random() * 6) + 1;
console.log(dadoTre);

// DADO4
var dadoQuattro = Math.floor(Math.random() * 6) + 1;
console.log(dadoQuattro);

// GIOCATORE2

var giocatoreDue = (dadoTre + dadoQuattro)
console.log(giocatoreDue);

if (giocatoreUno > giocatoreDue) {
  console.log('YOU WIN');
}
else if (giocatoreUno < giocatoreDue) {
  console.log('YOU LOSE');
}
else {
  console.log('DRAW');
}
