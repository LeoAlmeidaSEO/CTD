var numeroVezesUsuarioVenceu = 0
var numeroVezesOponenteVenceu = 0
var rodada = 1

function comecarJogo() {

    while (numeroVezesUsuarioVenceu < 2 && numeroVezesOponenteVenceu < 2) {
        
        let jogadaUsuario = Number(prompt('O que você deseja jogar? 1 = pedra, 2 = papel, 3 = tesoura'))
        let jogadaOponente = Math.floor(Math.random() * 3) + 1

        verificarGanhador(jogadaUsuario, jogadaOponente)
        rodada++
    }

}

function verificarGanhador(usuario, oponente) {

    let ganhou = `Você ganhou a rodada ${rodada}! ${usuario} vence ${oponente}.`
    let perdeu = `Você perdeu a rodada ${rodada}! ${oponente} vence ${usuario}.`
    let empate = `Empatou na rodada ${rodada}`

    if (usuario === oponente) { 
        console.log(empate);
    } else if (
        (usuario === 1 && oponente === 3) ||
        (usuario === 3 && oponente === 1) || 
        (usuario === 2 && oponente === 1)
    ) {
       numeroVezesUsuarioVenceu++;
       console.log(ganhou)
    } else {
       numeroVezesOponenteVenceu++;
       console.log(perdeu)
    }

}

function perguntaUsuarioDesejaJogar() {

    let usuarioDesejaJogar = confirm('Você gostaria de jogar?')

    if(usuarioDesejaJogar === true) {
        comecarJogo()
    } else {
        alert('Obrigado por visitar a página')
    }

}

perguntaUsuarioDesejaJogar()

function resultadoJogo() {

    if (numeroVezesUsuarioVenceu > numeroVezesOponenteVenceu) {
        alert(`Ganhou!! Placar (Você: ${numeroVezesUsuarioVenceu} x PC: ${numeroVezesOponenteVenceu})`);
    } else {
        alert(`Perdeu!! Placar (Você: ${numeroVezesUsuarioVenceu} x PC: ${numeroVezesOponenteVenceu})`);
    }

}

resultadoJogo()