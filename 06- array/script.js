// ARRAYS -> SERVE PRA ARMAZENAR VALORES DO MESMO TIPO

// EXEMPLOS

let strings = ["Dudu", "Maravilhoso", "Demais"];

let idades = [1,24,54,5,67,3];

let objetos = [

{nome: 'Dudu', idade: 24},

{nome: 'Carlos', idade: 20},

]

let array = [

[1,2,3],
[4,5,6],

[7,8,9]

]

// Acessando o que esta dentro do array

console.log(strings[2]); //Demais

console.log(idades[2]); //54

console.log(objetos[0].nome); //Dudu

console.log(array[2][1]); //8

// Projeto com DOM

const alunos = [
    {nome: "Ronaldo",
    nota: 5
    },
    {nome: "Murilo",
    nota: 10
    },
    {nome: "Veronica",
    nota: 7
    },{nome: "Evangeline",
    nota: 5.2
    },
]

   


const ul = document.querySelector(".lista")

for (let i = 0; i < alunos.length; i++) {
    const aluno = alunos[i]

    
    // Criar a 'li'
    const li = document.createElement('li')


    // Criando filhos de li
    const h3 = document.createElement('h3')
    const p = document.createElement('p')
    const h4 = document.createElement('h4')


    // Adicionando classes
    h3.classList.add('nome')
    p.classList.add('nota')
    h4.classList.add('status')

    // Adicionando o texto
    h3.textContent = aluno.nome
    p.textContent = aluno.nota

    // Adicionar classe na li
     li.classList.add("item")

    // Adicionar 3 filhos no li
    li.append(h3, p, h4)

    // Status
    if (aluno.nota >= 6) {
    h4.classList.add("aprovado");
    h4.classList.add("status");
    h4.textContent = "aprovado";
    } else {
    h4.classList.add("reprovado")
    h4.classList.add("status");
    h4.textContent = "reprovado";
}

    // Adicionando o li no ul
    ul.appendChild(li)
   
}