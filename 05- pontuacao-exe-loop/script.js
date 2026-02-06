// exercicio
// PONTUACAO MENOR OU IGUAL 3 - ADICIONAR CLASSE NIVEL BAIXO

// PONTUACAO MAIORES 3 E MENORES IGUAIS A 18 - ADICIONAR CLASSE NIVEL MEDIO

// PONTUACAO MAIORES QUE 18 E MENORES QUE 21 - ADICIONAR CLASSE NIVEL MEDIO

// Pegando os elementos 
const paines = document.querySelector('.painel')

for (let i = 1; i <= 21; i++) {
    // Criar um elemento pelo Java Script
    let bloco = document.createElement('div')
    // Adicionando a classe ao elemento pelo Java Script
    bloco.classList.add('bloco')
    bloco.textContent = i

    // Verificar se é par ou impar

    if (i <= 3) {
        // Adicionar a classe ao elemento pelo Java Script
        bloco.classList.add('nivel-baixo')
    }
    else if(i>3 && i<=18){
        // Adicionar a classe ao elemento pelo Java Script
        bloco.classList.add('nivel-medio')
    }
    else{
    bloco.classList.add('nivel-auto')
    }
    // Adicionar o filho a lista de quadrados
    paines.appendChild(bloco)
}
