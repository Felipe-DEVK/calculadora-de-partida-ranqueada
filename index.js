let vitoriasDoJogador = partidas(35, 23)

function partidas (v, d){
    let resultado = v - d
        if (resultado <= 10){
            console.log("Heroi tem saldo de " + resultado + " vitórias está no nivel FERRO")
        } else if (resultado <= 20){
            console.log("Heroi tem saldo de " + resultado + " vitórias está no nivel Bronze")
        }
}
