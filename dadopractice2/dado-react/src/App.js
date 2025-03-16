import React, {useState} from "react";
import Dado from "./components/Dado";

function App (){
  const [valorDado, setValorDado] = useState(1);

  const rolarDado = () => {
    const novoValor = Math.floor(Math.random() * 6) + 1;
    setValorDado(novoValor);
  };

  return(
    <div style={{textAlign: "center", marginTop: "50px"}}>
    <h1>Jogue o Dado</h1>
    <Dado valor={valorDado} />
    <br/>
    <button onClick={rolarDado} style={{padding: "10px", fontSize: "16px", marginTop: "20px"}}> Jogar Dado </button>
    </div>
  );
}

export default App; 