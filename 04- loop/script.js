// Extrutura de repetição


// For


// While


// Do While


// Exemplo de For somando números

let soma = 0

for(let i = 1; i<=5; i++){
    soma += i 
}

console.log("A soma é: " + soma);


for (let a = 1; a < 11; a++) {
    console.log(a);
}

let somar = 0

for (let m = 1; m <= 10; m++) {
    if(m % 2 === 0){
        somar += m;
    }
}
console.log("A soma total de tudo é " + somar);


let mult = 0

let numero = 5

for(let h = 0; h<=10; h++){
 mult= h * numero
 console.log("5 X " + h +" = " +mult);
}


// Fazer em ordem decrescente de 4 em 4 começando com a 50

for (let z = 50; z >= 0; z-=4) {
console.log(z);
}
