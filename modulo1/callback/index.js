// Exercicios 

const usuarios = [
    { nome: "Amanda Rangel", apelido: "Mandi" },
    { nome: "Laís Petra", apelido: "Laura" },
    { nome: "Letícia Chijo", apelido: "Chijo" }
  ]
const novaArrayA = usuarios.map((item, index, array)) => {
    console.log(item, index, array)

}