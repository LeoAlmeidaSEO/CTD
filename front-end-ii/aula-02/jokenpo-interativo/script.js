// Contagem de pontos
var contUser = 0
var contPC = 0

// Elementos da aplicação
const imgUser = document.getElementById("user")
const imgPC = document.getElementById("pc")
const jogar = document.getElementById("jogar")
const contador = document.getElementById("contador")
const winner = document.getElementById("winner")
const loser = document.getElementById("loser")

// Sons
// const audioWin = new Audio("assets/sounds/winning.wav")
// const audioLose = new Audio("assets/sounds/losing.wav")

// Variaveis de elementos
var player1 = ""
var player2 = ""

jogar.addEventListener("click", () => {
    reset()
    playPc()
})

function reset() {
    player1 = document.querySelector(`input[name="play"]:checked`).value
    imgUser.innerHTML = "<img src=./assets/images/" + player1 + ".png>"
    imgPC.innerHTML = ""
}

function playPc() {
    let opt = ['pedra','papel','tesoura'] // [0,1,2]
    let num = Math.floor(Math.random() * (2 - 0 + 1)) + 0;
    player2 = opt[num]
    imgPC.innerHTML = "<img src=./assets/images/" + player2 + ".png>"
    analyze()
}

function analyze() {
    jogar.disabled = true
    let win = "0"

    // 0 = empate
    // 1 = vitoria
    // -1 = derrota

    if (player1 == player2) {

    } else if (player1 == "pedra") {
        win = player2 == 'tesoura' ? 1 : -1
    } else if (player1 == 'papel') {
        win = player2 == 'pedra' ? 1 : -1
    } else if (player1 == 'tesoura') {
        win = player2 == 'papel' ? 1 : -1
    }
    

}