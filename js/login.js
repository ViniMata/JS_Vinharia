let senhaCadrasto = "1234"
let loginCadrasto = "1234"

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function verificarLogin(){
    let login = document.getElementById("login")
    let senha = document.getElementById("senha")
    if (login == loginCadrasto && senha == senhaCadrasto){
        window.location.href = "/html/pagCompras.html"
    } else {
        exibirTextoNaTela("p", "Login errado")
    }
}

