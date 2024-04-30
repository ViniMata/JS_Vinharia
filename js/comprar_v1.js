let total = 0;
const carrinhoElement = document.getElementById("carrinho")
const totalElement = document.getElementById('total');
function adicionarAoCarrinho(){
    alert("Adicionado ao Carrinho")
    const nomeProduto = 'Barbaresco DOCG Prunotto 2017';
    const precoProduto = 527.11;
    total += precoProduto;
    
    const itemCarrinho = document.createElement('li');
    itemCarrinho.textContent = `${nomeProduto} - R$ ${precoProduto.toFixed(2)}`;
    carrinhoElement.appendChild(itemCarrinho);

    const totalElement = document.getElementById('total');
    totalElement.textContent = `Total: R$ ${total.toFixed(2)}`;

}