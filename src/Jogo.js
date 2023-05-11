import  forca0 from'./assets/forca0.png';
import { useState } from 'react';

export default function Jogo(props){

let {palavras, 
  palavra, setPalavra, 
  arrayPalavra, setArrayPalavra,
  misteryPalavra, setMisteryPalavra
}=props;

  function sortearPalavra (){  
    palavras.sort(()=> 0.5-Math.random());
    arrayPalavra = palavras[0].split('');
    misteryPalavra = arrayPalavra.map(i => '_ ');
    setArrayPalavra( arrayPalavra);
    setMisteryPalavra( misteryPalavra);
    setPalavra(misteryPalavra.join(''));
  }

    return(
      <div className="Jogo">
        <img className="imgForca" src={forca0} />
        <div className="contBotaoPalavra">
          <button onClick={sortearPalavra}  className="botaoInicio">Escolher Palavra</button>
          <div className="palavra"><h1>{palavra}</h1></div>
        </div>
    </div>
    );
  }