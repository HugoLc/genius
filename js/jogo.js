class Jogo{
  const #botoes = [];
  let #sequencia = [];
  let #resposta =[];
  constructor(botoes){
    this.#botoes = botoes;
  }

  function rodarJogo(){
    let min = 1;
    let max = this.botoes.lenght;
    let gameOn = true;

    while (gameOn) {
      let indice = #gerarRandom(min, max);
      #sequencia.push(indice);
      #mostrarSequencia(#sequencia, #botoes);
      let resposta = #checarResposta(#sequencia, #resposta);
      resposta ? gameOn = true : gameOn = false;
    }

    #finalizarJogo();

  }

  function #gerarRandom(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  function #mostrarSequencia(seq, bt){

  }

  function #checarResposta(seq, res){
    if (!true) {
      //gameOn = false;
    }
  }

  function #finalizarJogo(){
    //registrar classificação
  }

  function #tocarSom(idSom){
    let sound = document.getElementById(soundObj);
    sound.Play();
  }
}
