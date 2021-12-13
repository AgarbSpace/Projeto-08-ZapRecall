import React from "react";
import TelaDeInicio from "./componentes/TelaDeInicio/index.js";
import TelaDasCartas from "./componentes/TelaDasCartas/index.js";
import TelaDeSucesso from "./componentes/TelaDeSucesso/index.js";
import TelaDeFracasso from "./componentes/TelaDeFracasso/index.js";
import "./reset.css";
import "./style.css";

export default function App(){
    const vetorDeCartas = [{pergunta: "O que é JSX?", resposta: "Uma extensão de linguagem do JavaScript"},
        {pergunta: "O React é __", resposta: "uma biblioteca JavaScript para construção de interfaces"},
        {pergunta: "Componentes devem iniciar com __", resposta: "letra maiúscula"},
        {pergunta: "Podemos colocar __ dentro do JSX", resposta: "expressões"},
        {pergunta: "O ReactDOM nos ajuda __", resposta: "interagindo com a DOM para colocar componentes React na mesma"},
        {pergunta: "Usamos o npm para __", resposta: "Usamos o npm para __"},
        {pergunta: "Usamos props para __", resposta:"passar diferentes informações para componentes "},
        {pergunta: "Usamos estado (state) para __", resposta: "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente"}
    ]

    const [botaoInicio, setBotaoInicio] = React.useState(0);
    const [faceDaCarta, setFaceDaCarta] = React.useState("frente")
    const [contador, setContador] = React.useState(0)
    const [bordaDaCarta, setBordaDaCarta] = React.useState(0);
    const [temIncorreto, setTemIncorreto] = React.useState(0)
    const botoesDaCarta = {
        neutro: 1,
        incorreto: 2,
        correto: 3,
        zap: 4 
    }
    

    if(botaoInicio === 1){
        return <TelaDasCartas 
        vetorDeCartas = {vetorDeCartas}
        faceDaCarta={faceDaCarta}
        setFaceDaCarta={setFaceDaCarta}
        contador = {contador}
        setContador = {setContador}
        bordaDaCarta = {bordaDaCarta}
        setBordaDaCarta = {setBordaDaCarta}
        botoesDaCarta = {botoesDaCarta}
        temIncorreto = {temIncorreto}
        setTemIncorreto = {setTemIncorreto}
        setBotaoInicio={setBotaoInicio}
        />
    }

    if((contador+1) === vetorDeCartas.length && temIncorreto === 0){
        return <TelaDeSucesso />
    }

    if((contador+1) === vetorDeCartas.length && temIncorreto === 1){
        return <TelaDeFracasso />
    }


    return(
        <>
            <TelaDeInicio botaoInicio = {botaoInicio} setBotaoInicio = {setBotaoInicio}/>
        </>
    )
}