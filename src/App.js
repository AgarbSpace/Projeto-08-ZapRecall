import React from "react";
import TelaDeInicio from "./componentes/TelaDeInicio";
import TelaDasCartas from "./componentes/TelaDasCartas";
import TelaDeSucesso from "./componentes/TelaDeSucesso";
import TelaDeFracasso from "./componentes/TelaDeFracasso";

export default function App(){
    const [botaoInicio, setBotaoInicio] = React.useState(0);
    const [contador, setContador] = React.useState(0)
    const [faceDaCarta, setFaceDaCarta] = React.useState("frente")
    const [bordaDaCarta, setBordaDaCarta] = React.useState(0);
    const botoesDaCarta = {
        neutro: 1,
        incorreto: 2,
        correto: 3,
        zap: 4 
    }

    if(botaoInicio === 1){
        return <TelaDasCartas 
        faceDaCarta = {faceDaCarta} 
        setFaceDaCarta = {setFaceDaCarta}
        contador = {contador}
        setContador = {setContador}
        />
    }


    return(
        <>
            <TelaDeInicio botaoInicio = {botaoInicio} setBotaoInicio = {setBotaoInicio}/>
            {botaoInicio === 1 ? <TelaDasCartas faceDaCarta = {faceDaCarta} setFaceDaCarta = {setFaceDaCarta}/> : console.log("deu ruim")}
            <TelaDeSucesso />
            <TelaDeFracasso />
        </>
    )
}