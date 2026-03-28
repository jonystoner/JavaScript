// objeto deve ter propriedade e valor 

const pessoa = {
    nome: "jonathan",
    idade: "16",
    genero: "Mulher",
    estuda: true,
    
}

pessoa.sobrenome = "clara"

console.log("nome",pessoa.nome,pessoa.sobrenome)

delete pessoa.idade

console.log(pessoa)

pessoa.hobies = ['jobar bola', 'jogavideogame', 'volei','truco']

console.log("pessoa", pessoa)

//for in para percorrer as chaves 

for (const chave in pessoa) {
    console.log("chave",chave)
    console.log("valores",pessoa[chave])

}


// metodos para objetos 
const chaves = Object.keys(pessoa)

const valoes = Object.values(pessoa)

const entradas = Object.entries(pessoa)

console.log("chave", chaves, "valores", valoes, "entradas",entradas)