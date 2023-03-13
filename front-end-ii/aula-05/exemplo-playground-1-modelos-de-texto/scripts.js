function escreverHTML(titulo, texto) {
    const body = document.getElementById('body');
    const meuTemplate = `
    <h1> ${titulo} </h1>
    <p> ${texto} </p>
    `;
    body.innerHTML += meuTemplate;
}

escreverHTML('Olá', 'Isso é um exemplo de template string em HTML.')
escreverHTML('É dinamico', 'Podemos inserir elementos HTML mediante o <b> JavaScript </b>')
escreverHTML('Facilita a programação', 'Evita escrever muito código e reutilizar o que escrevemos')
escreverHTML('Neste exemplo', 'Utilizamos uma única função para poder escrever 4 vezes em HTML, já imaginou como seria isso sem essa função?')