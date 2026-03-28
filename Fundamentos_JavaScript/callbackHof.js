// high order function uma função de alta ordem função que chama outas funções 


function calcular (numero1, numero2,operacao) {
    return operacao (numero1,numero2);

}

function soma(num1,num2){
    return num1 + num2;
}

console.log(calcular(10,5,soma))


function subtrair(sub1,sub2){
    return sub1 - sub2;
}

const resultado = calcular(10,5,soma)
const resultado1 = calcular(10,5,subtrair)

console.log("a soma é",resultado)
console.log("a subtração  é",resultado1)


