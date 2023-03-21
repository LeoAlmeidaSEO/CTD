//1- Adicione ao cartão o atributo "classe" com o valor "cartão"
let card = document.querySelector('#tarjeta');
card.classList.add('card');

//2- Adicione à imagem o atributo "src" com o valor "https://www.youtube.com/img/desktop/yt_1200.png"
let imgLogo = document.querySelector('#logo');
imgLogo.setAttribute("src", "https://www.youtube.com/img/desktop/yt_1200.png");

//3- Remova a classe de título que está dando um formato feio
let corrigirTitulo = document.querySelector('h1');
corrigirTitulo.classList.remove('titulo-feo');

//4- Verifique se o link para o youtube tem o atributo href ou não
let linkYoutubeValido = document.querySelector('#link_youtube');
linkYoutubeValido.hasAttribute("href")

//5- Obtenha o href do link da wikipedia e exiba-o no console
let linkWikipedia = document.querySelector('#link_wikipedia');
console.log(linkWikipedia.getAttribute("href"));
