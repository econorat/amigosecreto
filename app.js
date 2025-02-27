//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let listaAmigos = [];

function adicionarAmigo() {
    const input = document.getElementById('amigo');
    const nome = input.value.trim();

    if (nome && !listaAmigos.includes(nome)) {
        listaAmigos.push(nome);
        const listaAmigosElement = document.getElementById('listaAmigos');
        const li = document.createElement('li');
        li.textContent = nome;
        listaAmigosElement.appendChild(li);
        input.value = '';
    } else {
        alert('Por favor, insira um nome válido ou não duplicado.');
    }
}

function sortearAmigo() {
    if (listaAmigos.length < 2) {
        alert('Adicione pelo menos dois amigos para sortear.');
        return;
    }

    const resultadoElement = document.getElementById('resultado');
    resultadoElement.innerHTML = '';

    const listaSorteada = [...listaAmigos].sort(() => Math.random() - 0.5);

    listaSorteada.forEach((nome, index) => {
        const li = document.createElement('li');
        li.textContent = `${nome} tirou ${listaSorteada[(index + 1) % listaSorteada.length]}`;
        resultadoElement.appendChild(li);
    });
}