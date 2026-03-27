function buscarGato() {
    fetch ('https://api.thecatapi.com/v1/images/search', {
        method: 'GET'
    })
    .then(response => response.json())
    .then(data => {
        const imagem = data[0].url;
        document.getElementById('imagemGato').src = imagem;
    })
    .catch(error => {
        alert("Ops, ocorreu um erro ao buscar o gatinho. Tente novamente!");
        console.log(error);
    });
}

buscarGato();