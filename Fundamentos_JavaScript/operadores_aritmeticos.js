const numeroUm = 5;
const numeroDois = 9;

// Operadores Aritméticos:
// +, -, *, /, %, **

const subtracao = numeroDois - numeroUm;
console.log("Subtração: " + subtracao);

const soma = numeroUm + numeroDois;
console.log("Soma: "+soma);

const divisao = numeroUm/numeroDois;
console.log("Divisão: "+divisao);

const multiplicacao = numeroUm*numeroDois;
console.log("Multiplicação: "+multiplicacao);

const conta = (numeroUm+numeroDois)*numeroUm;
console.log("Conta: "+conta);

// numeroTres vale 2, logo, *= significa que eu multiplicarei o numero 
// e armazenarei na mesma variavel.
let numeroTres = 2;
numeroTres *= 3;
console.log(numeroTres);

let numero = 10;
numero += 25; // somando 10 com 25.
console.log(numero);

// incremento e decremento:
let contador = 7;
contador++; // somando +1
console.log(contador);

contador--; // subtraindo -1
console.log(contador);

// OPERADORES DE ATRIBUIÇÃO:
// *= (multiplicação)
// += (soma)
// -= (subtração)
// /= (divisão)