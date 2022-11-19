function mudarTema() {
    var element = document.body;
    element.classList.toggle("modo-dark");
    mudarNomeBotao(); 
}

function mudarNomeBotao() {
    var x = document.getElementById("button-mudar-tema");
    if (x.innerHTML === "Escuro") {
        x.innerHTML = "Claro";
    } else {
        x.innerHTML = "Escuro";
    }
}