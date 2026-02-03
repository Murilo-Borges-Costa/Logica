// OPERADORES

// ARITMETICO => + - / % *

// RELACIONAL => >= > <= < !== ===

// LOGICO => && / | | / !


//EXERCICIO

// PERGUNTAR AO USUARIO DOIS NUMEROS
let um = Number(prompt("Digite um número."))
// DOM - Puchae elemento do HTML
let umP = document.getElementById('um')

// mostrar no html
umP.textContent = um

let dois = Number(prompt("Digite outro número."))
// DOM - Puchae elemento do HTML
let doisP = document.getElementById('dois')

// mostrar no html
doisP.textContent = dois

// SOMAR
Number(um)
Number(dois)
let somar = um + dois
// VERIFICAR SE ESSE NUMERO E MAIOR QUE 15
if(somar>15){
    alert(somar + " é maior que 15.")
}

let somaM = document.getElementById('tudo')

somaM.textContent = somar
// MOSTRAR NO HTML USANDO DOM
