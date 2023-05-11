import { useState } from "react";

export default function Letras(props) {

    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    const {botao, setBotao,
        palavras, 
        palavra, setPalavra, 
        arrayPalavra, setArrayPalavra,
        misteryPalavra, setMisteryPalavra} = props;

    function verificarLetra(letra){
        const auxElemento = [];
        const auxIndice = [];
        arrayPalavra.forEach((elemento, indice)=>{
            if(letra == elemento){
                misteryPalavra[indice]= letra;
                setArrayPalavra(misteryPalavra);
            }
        });
    }
    

    return (
        <div className="Letras">
            {alfabeto.map( i => <button disabled={botao} key={i} onClick={()=>verificarLetra(i)} className="letra"> {i} </button>)}
        </div>
    );
}