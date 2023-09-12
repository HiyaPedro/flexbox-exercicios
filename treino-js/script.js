console.log("CHECK CHECK")
/*
//----PORTUGUESE----//
Temos um array de animais diversos, onde cada bichinho é um objeto com as propriedades: nome e classificacao. A classificacao tem três valores possíveis: peixe, ave ou mamífero

Crie um novo array que tenha apenas os nomes dos animais, no formato de strings.

Observação: não altere o array de animais! Apenas o utilize para criar seu novo array utilizando a função map.

//----ENGLISH----//
We have an array of different animals, where each animal is an object with the properties: name and classification. The classification has three possible values: fish, bird or mammal

Create a new array that only has the names of the animals, in string format.

Note: Do not change the animals array! Just use it to create your new array using the map function.
*/

// function criarArrayNomesAnimais() {
//     const animais = [
//       { nome: "Cachorro", classificacao: "mamífero" },
//       { nome: "Papagaio", classificacao: "ave" },
//       { nome: "Gato", classificacao: "mamífero" },
//       { nome: "Carpa", classificacao: "peixe" },
//       { nome: "Pomba", classificacao: "ave" }
//     ]
//     const newArray = animais.map((nome) => {
// 		return {...nome}
// })
// }
// const result = criarArrayNomesAnimais()
// console.log(result)

//----MY FUNCTION----//
const animais = [
    { nome: "Cachorro", classificacao: "mamífero" },
    { nome: "Papagaio", classificacao: "ave" },
    { nome: "Gato", classificacao: "mamífero" },
    { nome: "Carpa", classificacao: "peixe" },
    { nome: "Pomba", classificacao: "ave" }
  ]
const nameArray = animais.map(obj => obj.nome);
console.log(nameArray);

//----TEST PAGE FUNCTION WITH PRE-SET----//
function criarArrayNomesAnimais() {
    const animais = [
      { nome: "Cachorro", classificacao: "mamífero" },
      { nome: "Papagaio", classificacao: "ave" },
      { nome: "Gato", classificacao: "mamífero" },
      { nome: "Carpa", classificacao: "peixe" },
      { nome: "Pomba", classificacao: "ave" }
    ]

return animais.map(obj => obj.nome);

}
//const result = criarArrayNomesAnimais()
//console.log(result)
