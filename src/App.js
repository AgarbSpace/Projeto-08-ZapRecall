import React from "react";
import TelaDeInicio from "./componentes/TelaDeInicio";
import TelaDasCartas from "./componentes/TelaDasCartas";
import TelaDeSucesso from "./componentes/TelaDeSucesso";
import TelaDeFracasso from "./componentes/TelaDeFracasso";

export default function App(){
    const [botaoInicio, setBotaoInicio] = React.useState(0);
    const [contador, setContador] = React.useState(0)
    const [bordaDaCarta, setBordaDaCarta] = React.useState(0);
    const botoesDaCarta = {
        neutro: 1,
        incorreto: 2,
        correto: 3,
        zap: 4 
    }

    if(botaoInicio === 1){
        return <TelaDasCartas 
        contador = {contador}
        setContador = {setContador}
        bordaDaCarta = {bordaDaCarta}
        setBordaDaCarta = {setBordaDaCarta}
        botoesDaCarta = {botoesDaCarta}
        />
    }


    return(
        <>
            <TelaDeInicio botaoInicio = {botaoInicio} setBotaoInicio = {setBotaoInicio}/>
            <TelaDeSucesso />
            <TelaDeFracasso />
        </>
    )
}