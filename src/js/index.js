const botaoMostrarTrabalhos = document.querySelector('.btn-mostrar-trabalhos');
const trabalhosInativos = document.querySelectorAll('.trabalho:not(.ativo)');

botaoMostrarTrabalhos.addEventListener('click', () => {
    mostrarMaisTrabalhos();
    esconderBotao();
});

function esconderBotao() {
    botaoMostrarTrabalhos.classList.add("remover");
}

function mostrarMaisTrabalhos() {
    trabalhosInativos.forEach(trabalhoInativo => {
        trabalhoInativo.classList.add('ativo');
    });
}
