import React from "react";

export default function TelaDasCartas({faceDaCarta, setFaceDaCarta, contador, setContador}){

    const vetorDeCartas = [{pergunta: "O que é JSX?", resposta: "Uma extensão de linguagem do JavaScript"},
        {pergunta: "O React é __", resposta: "uma biblioteca JavaScript para construção de interfaces"},
        {pergunta: "Componentes devem iniciar com __", resposta: "letra maiúscula"},
        {pergunta: "Podemos colocar __ dentro do JSX", resposta: "expressões"},
        {pergunta: "O ReactDOM nos ajuda __", resposta: "interagindo com a DOM para colocar componentes React na mesma"},
        {pergunta: "Usamos o npm para __", resposta: "Usamos o npm para __"},
        {pergunta: "Usamos props para __", resposta:"passar diferentes informações para componentes "},
        {pergunta: "Usamos estado (state) para __", resposta: "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente"}
    ]
    
    const faceDaFrenteJSX = vetorDeCartas.map(frente =>(<span className = "pergunta">{frente.pergunta}</span>))
    const faceDeTrasJSX = vetorDeCartas.map(tras => (<span className = "resposta">{tras.resposta}</span>))
    console.log(faceDeTrasJSX);
    
    return (
        <section className = "telaDasCartas">
            <img className = "miniLogo" src = "assets/logo-mini.png"/>
            <div className = "carta">
                <span className = "contador">{contador + 1}/8</span>
                <div  className="face">
                    {faceDaFrenteJSX[contador]}
                </div>
                <div className="face faceDeTras">
                    <span className = "miniPergunta">{faceDaFrenteJSX[contador].props.children}</span>
                    {faceDeTrasJSX[contador]}
                    <div className = "botoesDaCarta">
                        <button className = "botaoPreto" onClick = {() => setContador(contador+1)}>Aprendi agora</button>
                        <button className = "botaoVermelho">Não lembrei</button>
                        <button className = "botaoVerde">Lembrei com esforço</button>
                        <button className = "botaoAmarelo">Zap!</button>
                    </div>
                </div>
                <img className = "iconeVirar" src = "assets/turn.png" />
            </div>
        </section>
    )
}

