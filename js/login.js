// let senhaCadrasto = "1234"
// let loginCadrasto = "1234"
function redirecionarParaYoutube() {
    window.open('https://encurtador.com.br/juVX2', '_blank');
}
function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function verificarLogin(){
    let login = document.getElementById("login").value
    let senha = document.getElementById("senha").value
    if (login == 1234 && senha == 1234){
        window.location.href = "/html/pagCompras.html"
    } else if (login === "caiotech" && senha === "corinthians")  {
        redirecionarParaYoutube();
    } else {
        exibirTextoNaTela("p", "Login errado")
    }
}

