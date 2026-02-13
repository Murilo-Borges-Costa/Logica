const urlPersonagens = "https://rickandmortyapi.com/api"

function buscarPersonagem() {
    // Buscar dados da API
    fetch(urlPersonagens + "/character")

    .then((resposta) => resposta.json())

    .then((dados) => console.log(dados))

    .catch(err => console.log(err))
}

buscarPersonagem()