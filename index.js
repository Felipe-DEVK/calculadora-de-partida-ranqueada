let vitoriasDoJogador = partidas(1234,1153)

function partidas (v, d){
    let resultado = v - d
        if (resultado <= 10){
            console.log("Heroi tem saldo de " + resultado + " vitórias está no nivel FERRO")
        } else if (resultado <= 20){
            console.log("Heroi tem saldo de " + resultado + " vitórias está no nivel BRONZE")
        } else if(resultado <= 50){
            console.log("Heroi tem saldo de " + resultado + " vitórias está no nivel PRATA")
        } else if (resultado <= 80){
            console.log("Heroi tem saldo de " + resultado + " vitórias está no nivel OURO")
        } else if (resultado <= 90) {
            console.log("Heroi tem saldo de " + resultado + " vitórias está no nivel DIAMANTE")
        } else if (resultado <= 100){
            console.log("Heroi tem saldo de " + resultado + " vitórias está no nivel LENDARIO")
        }else {
            console.log("Heroi tem saldo de " + resultado + " vitórias está no nivel IMORTAL")
        }
}
