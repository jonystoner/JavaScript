function saudacao(name,) {
    console.log("ola", name);
}
saudacao("jonathan")
saudacao("jon")

function calcDobro(numero) {
    return numero * 2
}
console.log(calcDobro(25))

const numeroDobro =  calcDobro(50)
console.log(numeroDobro)

// arrow  function


const saud = (nome) => {
    console.log("ola", nome);
}

saud("somelie");

const calculoDobro = (numero1) => {
    return numero1 *2        
}

console.log(calcDobro(25))


// function mais simpplificada 

const saud2 =  nome => console.log("ola", nome)

saud2("chico")

const dobro = numero => numero*2

console.log(dobro(10))

