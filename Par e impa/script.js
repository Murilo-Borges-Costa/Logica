// Pegando os elementos 
const listaDeQuadrado = document.querySelector('.lista-quadrados')

for (let i = 1; i <= 9; i++) {
    // Criar um elemento pelo Java Script
    let quadrado = document.createElement('div')
    // Adicionando a classe ao elemento pelo Java Script
    quadrado.classList.add('quadrado')
    quadrado.textContent = i

    // Verificar se é par ou impar

    if (i % 2 === 0) {
        // Adicionar a classe ao elemento pelo Java Script
        quadrado.classList.add('par')
    }
    else{
        // Adicionar a classe ao elemento pelo Java Script
        quadrado.classList.add('impar')
    }

    // Adicionar o filho a lista de quadrados
    listaDeQuadrado.appendChild(quadrado)
}