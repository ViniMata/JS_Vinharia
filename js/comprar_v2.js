let total = 0;
const carrinhoElement = document.getElementById("carrinho")
const totalElement = document.getElementById('total');
function adicionarAoCarrinho(){
    alert("Adicionado ao Carrinho")
    const nomeProduto = 'Orvieto Classico Superiore San Giovanni della Sala 2021';
    const precoProduto = 308.75;
    total += precoProduto;
    
    const itemCarrinho = document.createElement('li');
    itemCarrinho.textContent = `${nomeProduto} - R$ ${precoProduto.toFixed(2)}`;
    carrinhoElement.appendChild(itemCarrinho);

    const totalElement = document.getElementById('total');
    totalElement.textContent = `Total: R$ ${total.toFixed(2)}`;

}