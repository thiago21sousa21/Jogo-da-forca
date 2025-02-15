
import imagens from './../../assets/index.js'

export default function Jogo(props){

  console.log('IMAGENS', imagens)

let {palavras, 
  palavra, setPalavra, 
  arrayPalavra, setArrayPalavra,
  misteryPalavra, setMisteryPalavra,
  cont, setCont,
  botao, setBotao,
  cor, setCor
}=props;

  function sortearPalavra (){  
    setCor('preto');
    setBotao(botao.fill(false)); 
    cont=0;
    setCont(cont);
    palavras.sort(()=> 0.5-Math.random());
    console.log(palavras);
    arrayPalavra = palavras[0].split('');
    misteryPalavra = arrayPalavra.map(i => '_ ');
    setArrayPalavra( arrayPalavra);
    setMisteryPalavra( misteryPalavra);
    setPalavra(misteryPalavra.join(''));
  }

    return(
      <div className="Jogo">
        <img data-test="game-image" className="imgForca" src={imagens[cont]}/>
        <div className="contBotaoPalavra">
          <button data-test="choose-word" onClick={sortearPalavra}  className="botaoInicio">Escolher Palavra</button>
          <div className="palavra"><h1 data-test="word" className={cor}>{palavra}</h1></div>
        </div>
    </div>
    );
  }