var expect = require('expect.js');
var index = require('../index');
/*
Pedra empata com Pedra e ganha de Tesoura
Tesoura empata com Tesoura e ganha de Papel
Papel empata com Papel e ganha de Pedra
*/

describe('Testes unitários:', function () {
  it("Pedra empata com Pedra", function(done){
    expect(index.jokenpo("pedra","pedra")).to.be("Empate");
    done();
  });

  it('Tesoura empata com tesoura', function(done) {
    expect(index.jokenpo('tesoura', 'tesoura')).to.be('Empate');
    done();
  });

  it('Papel empata com papel', function(done) {
    expect(index.jokenpo('papel', 'papel')).to.be('Empate');
    done();
  });
  
  it('Papel ganha de Pedra ', function(done){
    expect(index.jokenpo('papel', 'pedra')).to.be('Papel');
    done();
  });

  it('Papel perde de Tesoura', function(done){
    expect(index.jokenpo('papel', 'tesoura')).to.be('Tesoura');
    done();
  })

  it('Pedra perde de papel', function(done){
    expect(index.jokenpo('pedra', 'papel')).to.be('Papel');
    done();
  })

  it('Pedra ganha de tesoura', function(done){
    expect(index.jokenpo('pedra', 'tesoura')).to.be('Pedra');
    done();
  })

  it('verifica escolha jogador', function(done) {
    expect(index.jokenpo('algumacoisa', 'tesoura')).to.be('Entrada inválida');
    done();
  })

  it('2 entradas invalidas')  


  it('Descrição do primeiro teste', function (done) {
    done();
  });
});
