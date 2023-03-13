

let personagem = {
    nome: "Michael",
    sobrenome: "Scott",
    nascimento: {
       data: "15/04/1965",
       cidade: "Scranton",
       estado: "Pensilvânia"
    },
    imagenUrl : "https://upload.wikimedia.org/wikipedia/en/thumb/d/dc/MichaelScott.png/220px-MichaelScott.png",
    trabalho: {
       cargo: "Manager Regional",
       empresa: "Dunder Mifflin"
    }
};

function escreverHTML() {
    const body = document.getElementById('body');
    const meuTemplate = `
    <ul>
        <li> Nome: ${personagem.nome} </li>
        <li> Sobrenome: ${personagem.sobrenome} </li>
        <li> Data de Nascimento: ${personagem.nascimento.data} </li>
        <li> Cidade de Nascimento: ${personagem.nascimento.cidade} </li>
        <li> Estado de Nascimento: ${personagem.nascimento.estado} </li>

        <img src="${personagem.imagenUrl}">

        <li> Cargo: ${personagem.trabalho.cargo} </li>
        <li> Empresa: ${personagem.trabalho.empresa} </li>
    </ul>
    `;
    body.innerHTML += meuTemplate;
}

escreverHTML(personagem)