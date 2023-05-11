import Jogo from "./Jogo";
import Letras from "./Letras";
import palavras from "./palavras";
import { useState } from "react";



function App() {
  const [palavra, setPalavra ]= useState('');
  const [arrayPalavra, setArrayPalavra] = useState('');
  const [misteryPalavra, setMisteryPalavra] = useState('');
  console.log(palavras);

  const [botao, setBotao] = useState(false);



  return (
    <div className="App">
      <Jogo 
          palavras={palavras}
          palavra={palavra}
          setPalavra={setPalavra}
          arrayPalavra={arrayPalavra}
          setArrayPalavra={setArrayPalavra}
          misteryPalavra={misteryPalavra}
          setMisteryPalavra={setMisteryPalavra}
      />
      <Letras botao={botao} setBotao={setBotao}
          palavras={palavras}
          palavra={palavra}
          setPalavra={setPalavra}
          arrayPalavra={arrayPalavra}
          setArrayPalavra={setArrayPalavra}
          misteryPalavra={misteryPalavra}
          setMisteryPalavra={setMisteryPalavra}
      />
    </div>
  );
}

export default App;
