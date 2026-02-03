// if, else. else if

// condicao simples

// condicao composta

// condicao aninhada

// SIMPLES

let idade = 24;

if (idade > 18){

console.log("Maior de 18");

}

// COMPOSTO

let possuiFaculdade = true;

if (!possuiFaculdade) {

console.log("Possui");
}

else {

console.log("Nao possui");

}

//ANINHADO

let possuiTecnico = false;

let pessoaIdade = 19;

if (possuiTecnico){

if (pessoaIdade > 18) {

console.log("Possui tecnico e é maior de 18");

} else {

console.log("Possui tecnico e não é maior de 18");

}
}
else{

console.log("Não possui nada");
}

// PEDIR AO USUARIO TRES NOTAS

// CALCULAR A MEDIA

// MEDIA >= 6 APROVADO / MEDIA < 6 REPROVADO

// MOSTRAR NO HTML USANDO DOM

// PERGUNTAR AO USUARIO três NUMEROS
let um = Number(prompt("Digite a primeira nota."))
// DOM - Pucha elemento do HTML
let umP = document.getElementById('um')

// mostrar no html
umP.textContent = um

let dois = Number(prompt("Digite a segunda nota."))
// DOM - Puchae elemento do HTML
let doisP = document.getElementById('dois')

// mostrar no html
doisP.textContent = dois

let tres = Number(prompt("Digite a terceira nota."))
// DOM - Puchae elemento do HTML
let tresP = document.getElementById('tres')

// mostrar no html
tresP.textContent = dois
// media
Number(um)
Number(dois)
let media = (um + dois +tres)/3
// VERIFICAR SE ESSE NUMERO E MAIOR QUE 15
if(media>=6){
    alert("Você passou, sua média é " + media)
}
else{
    alert("Você reprovou, sua média é " + media)
}

let mediaM = document.getElementById('mediaa')

mediaM.textContent = media
// MOSTRAR NO HTML USANDO DOM