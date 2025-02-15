import  forca0 from'../../assets/forca0.png';
import  forca1 from'../../assets/forca1.png';
import  forca2 from'../../assets/forca2.png';
import  forca3 from'../../assets/forca3.png';
import  forca4 from'../../assets/forca4.png';
import  forca5 from'../../assets/forca5.png';
import  forca6 from'../../assets/forca6.png';


export default function Jogo(props){
  const arrayImagens = [ forca0, forca1, forca2, forca3, forca4, forca5, forca6 ];


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
        <img data-test="game-image" className="imgForca" src={arrayImagens[cont]}/>
        <div className="contBotaoPalavra">
          <button data-test="choose-word" onClick={sortearPalavra}  className="botaoInicio">Escolher Palavra</button>
          <div className="palavra"><h1 data-test="word" className={cor}>{palavra}</h1></div>
        </div>
    </div>
    );
  }