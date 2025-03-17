let amigos = [];
let sorteados = [];

//Adiciona um novo nome na lista de amigos
function adicionarAmigo() {
    let nome = document.getElementById('amigo').value;
    
    if (nome === '') {
        alert('Por favor, insira um nome.');
    } else {
        amigos.push(nome);
        console.log(amigos);
        limparCampo();
        atualizarLista();
    }
}

document.getElementById('amigo').addEventListener('keydown', function (event) {
    if (event.key === 'Enter') adicionarAmigo();
    });

//limpa o campo de entrada
function limparCampo() {
    nome = document.querySelector('input');
    nome.value = '';
}

//mostra na interface os amigos adicionados à lista 
function atualizarLista() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';

    for (let i = 0; i < amigos.length; i++){
        let li = document.createElement('li');
        li.innerHTML = amigos[i];
        listaAmigos.appendChild(li);
    }
}

//sorteia o amigo secreto
function sortearAmigo() {
    if (amigos === 0) {
        alert('Adicione pelo menos um amigo antes de sortear.');
        return;
    }

    let resultado;
    let sorteando = true;

    while (sorteando) {
        let amigoSorteado = Math.floor(Math.random() * amigos.length);
        resultado = amigos[amigoSorteado];

        if (!sorteados.includes(resultado)) {
            sorteando = false;
        }
    }

    sorteados.push(resultado);

    document.getElementById('resultado').innerHTML = `<li>${resultado}</li>`;

}


