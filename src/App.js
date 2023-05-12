import Jogo from "./Jogo";
import Letras from "./Letras";
import palavras from "./palavras";
import { useState } from "react";



function App() {
  const [palavra, setPalavra ]= useState('');
  const [arrayPalavra, setArrayPalavra] = useState([]);
  const [misteryPalavra, setMisteryPalavra] = useState('');
  let [cont, setCont]= useState(0);
  const [botao, setBotao] = useState(Array(26).fill(true));



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
          cont={cont}
          setCont={setCont}
          botao={botao} setBotao={setBotao}
      />
      <Letras botao={botao} setBotao={setBotao}
          palavras={palavras}
          palavra={palavra}
          setPalavra={setPalavra}
          arrayPalavra={arrayPalavra}
          setArrayPalavra={setArrayPalavra}
          misteryPalavra={misteryPalavra}
          setMisteryPalavra={setMisteryPalavra}
          cont={cont}
          setCont={setCont}

      />
    </div>
  );
}

export default App;
