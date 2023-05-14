import { useState } from "react";

export default function Letras(props) {
    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    let {botao, setBotao,
        palavras, 
        palavra, setPalavra, 
        arrayPalavra, setArrayPalavra,
        misteryPalavra, setMisteryPalavra,
        cont, setCont,
        setCor} = props;

    function verificarLetra(letra, ind){

        let bin = 0;

        
        const newBotao = [...botao]; 
        newBotao[ind] = true;
        setBotao(newBotao);


        arrayPalavra.forEach((elemento, indice)=>{
            if(letra == elemento){

                misteryPalavra[indice]= letra;
                setMisteryPalavra(misteryPalavra);
                setPalavra(misteryPalavra.join(''));
                bin = 1;

            }
        });

        if(bin == 0){
            cont++;
            setCont(cont);
        }else{
            bin = 0;
        }

        if(cont>=6){
            setCor('vermelho');
            setBotao(botao.fill(true));
            setPalavra(palavras[0]);
        }

        if(misteryPalavra.join('') === arrayPalavra.join('')){
            setCor('verde');
            setBotao(botao.fill(true));
        }


    }
    

    return (
        <div className="Letras">
            {alfabeto.map( (i, j) => <button data-test="letter" disabled={botao[j]} key={i} onClick={()=>verificarLetra(i, j)} className="letra"> {i} </button>)}
        </div>
    );
}