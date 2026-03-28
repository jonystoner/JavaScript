const  frutas = ["banana","maça","uva","laranja","limão"]
// posições do vetor: 0,1,2,3,4

//exibindo o array
console.log(frutas)

console.log("a primeira fruta:",frutas[0]);
console.log("a ultima  fruta:",frutas[4]);
//conta o total de frutas
console.log("total de frutas:", frutas.length);

//adicionando um novo elemento ao meu array 
frutas.push("pessego");
console.log(frutas)

//removendo um elemento do array
frutas.splice(0,1)
console.log(frutas)


//percorrendo o array com laço for 
for(i = 0 ; i <= frutas.length ; i++ ){
    console.log("indice ", i)
    console.log(frutas[i])
}

//precorrendo o array com o metodo foreach
frutas.forEach((valor,indice) => {
    console.log("indice", indice, "fruta", valor)
});

// percorrendo com for of
for (const fruta of frutas){
    console.log("frutas da vez", fruta)
}



const numeros = [1,2,3,4,5,6,7,8,9,10]

//usando o metodo filter para localizar apenas numeros pares

const numerosPares = numeros.filter((numeros) =>{
     return numeros % 2 === 0
 })

 console.log("todos os numeros",numeros)
 console.log("numeros pares",numerosPares)

 //Metodo map para manipulação dos valores
 // tratamso dessa forma como valores diferentes (sem modificar o array original)
 

const quadrados = numeros.map((numero) => {
     return numero * numero
 })

 console.log(quadrados)
