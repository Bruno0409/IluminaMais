
const botoes = document.querySelectorAll('.btn-adicionar');

botoes.forEach(botao => {
    botao.addEventListener('click', () => {
        alert('Produto adicionado ao carrinho!');
    });
});
