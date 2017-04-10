module.exports.jokenpo = function (j1,j2) {
    
    if (!this.validarentrada(j1)) {
        console.log('jogador 1 invalido')
        return "Entrada inválida";
    }

   if (!this.validarentrada(j2)) {
       console.log('jogador 2 invalido')
        return "Entrada inválida";
    }

    if (j1 == j2) return 'Empate';

    if (j1 == 'papel'){
        if (j2 == 'pedra') 
            return "Papel";
        if (j2 == 'tesoura')
            return "Tesoura";
    }
    else if (j1 == "pedra"){
        if(j2 == 'papel')
            return "Papel";
        if(j2 == 'tesoura')
            return "Pedra";
    }
   

}

module.exports.comecar = function() {
    console.log("Comeco do jogo .");
    // Jogador 1 
    jogador1 = "Papel"
    // Jogador 2
    jogador2 = "Pedra"
}

module.exports.validarentrada = function(Qualquerjogada) {
  var JogadasValidas =["pedra","papel","tesoura"];
  console.log('validar: '+Qualquerjogada)
  
  if (!Qualquerjogada  || !JogadasValidas.some(g => g === Qualquerjogada)) 
    return false;
   
   return true;
    
}