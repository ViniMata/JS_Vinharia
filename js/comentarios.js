let comments = [];

// Função para adicionar um comentário
function addComment(name, comment) {
    comments.push({ name, comment });
    renderComments();
}

// Função para exibir os comentários
function renderComments() {
    const commentsDiv = document.getElementById('comments');
    commentsDiv.innerHTML = '';

    comments.forEach(comment => {
        const commentElement = document.createElement('div');
        commentElement.innerHTML = `<strong>${comment.name}</strong>: ${comment.comment}`;
        commentsDiv.appendChild(commentElement);
    });
}

// Event listener para o envio do formulário
document.getElementById('commentForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const comment = document.getElementById('comment').value;
    addComment(name, comment);
    document.getElementById('commentForm').reset();
});

// Exibe os comentários iniciais
renderComments();