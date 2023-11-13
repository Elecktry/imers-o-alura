var nomeDoUsuario = prompt('Entre com o seu nome:')
var valorEmDolar = prompt('Entre com o valor em dolar:');
var cotacaoDoDolar = 5.32;

var valorEmReal = valorEmDolar*cotacaoDoDolar;

valorEmReal= valorEmReal.toFixed(2);

alert ('olá ' + nomeDoUsuario + 'seu valor em reais é: '+ 'R$ ' + valorEmReal);