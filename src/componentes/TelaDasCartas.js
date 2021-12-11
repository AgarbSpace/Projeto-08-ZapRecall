import React from "react";
import App from "../App";

export default function TelaDasCartas({faceDaCarta, setFaceDaCarta,vetorDeCartas, contador, setContador, bordaDaCarta, setBordaDaCarta, botoesDaCarta, setTemIncorreto, setBotaoInicio}){
    const botoes = [
        <button className = "botaoPreto" onClick = {() => mudarBorda(botoesDaCarta.neutro)}>Aprendi agora</button>,
        <button className = "botaoVermelho"onClick = {() => mudarBorda(botoesDaCarta.incorreto)}>Não lembrei</button>,
        <button className = "botaoVerde" onClick = {() => mudarBorda(botoesDaCarta.correto)}>Lembrei com esforço</button>,
        <button className = "botaoAmarelo"onClick = {() => mudarBorda(botoesDaCarta.zap)}>Zap!</button>
    ]

    const faceDaFrenteJSX = vetorDeCartas.map(frente =>(<span className = "pergunta">{frente.pergunta}</span>))
    const faceDeTrasJSX = vetorDeCartas.map(tras => (<span className = "resposta">{tras.resposta}</span>))
    const botoesJSX = botoes.map(botao => (<>{botao}</>))

    function virarCartaEAumentarContador(){
        setFaceDaCarta("frente");
        setContador(contador+1)
    }

    function mudarBorda(botao){
        console.log(botao);
        setFaceDaCarta("trasRespondido")
        if(botao === 1){
            setBordaDaCarta("cartaPreta")
        }else if(botao === 2){
            setTemIncorreto(1);
            setBordaDaCarta("cartaVermelha")
        }else if(botao === 3){
            setBordaDaCarta("cartaVerde")

        }else if(botao === 4){
            setBordaDaCarta("cartaAmarela")
        }
    }

    function irParaTelaFinal(){
        setBotaoInicio(2)
    }
    
    if(faceDaCarta === "frente"){
        return(
            <section className = "telaDasCartas">
            <img className = "miniLogo" src = "assets/logo-mini.png"/>
            <div className = "carta" data-identifier="flashcard">
                <span className = "contador" data-identifier="counter">{contador + 1}/{vetorDeCartas.length}</span>
                <div  className="face">
                    {faceDaFrenteJSX[contador]}
                </div>
                <img className = "iconeVirar" src = "assets/turn.png" onClick={() => setFaceDaCarta("tras")} data-identifier="arrow"/>
            </div>
        </section>
        )
    }else if(faceDaCarta === "tras"){
        return (
            <section className = "telaDasCartas">
                <img className = "miniLogo" src = "assets/logo-mini.png"/>
                <div className = "carta" data-identifier="flashcard">
                    <span className = "contador" data-identifier="counter">{contador + 1}/{vetorDeCartas.length}</span>
                    <div className="face">
                        <span className = "miniPergunta">{faceDaFrenteJSX[contador].props.children}</span>
                        {faceDeTrasJSX[contador]}
                        <div className = "botoesDaCarta">
                            {botoesJSX}
                        </div>
                    </div>
                </div>
            </section>
        )

    }else if(faceDaCarta === "trasRespondido" && (contador+1) === vetorDeCartas.length){
        console.log("entrou aqui");
        return(
            <section className = "telaDasCartas">
                <img className = "miniLogo" src = "assets/logo-mini.png"/>
                <div className = {bordaDaCarta} data-identifier="flashcard">
                    <span className = "contador" data-identifier="counter">{contador + 1}/{vetorDeCartas.length}</span>
                    <div className="face">
                        <span className = "miniPergunta">{faceDaFrenteJSX[contador].props.children}</span>
                        {faceDeTrasJSX[contador]}
                        <div className="setinha">
                            <img className = "iconeVirar" src = "assets/turn.png" onClick = {() => irParaTelaFinal()} data-identifier="arrow"/>
                        </div>
                    </div>
                </div>
            </section>
        )
    }else if(faceDaCarta === "trasRespondido"){
        return(
            <section className = "telaDasCartas">
                <img className = "miniLogo" src = "assets/logo-mini.png"/>
                <div className = {bordaDaCarta} data-identifier="flashcard">
                    <span className = "contador" data-identifier="counter">{contador + 1}/{vetorDeCartas.length}</span>
                    <div className="face">
                        <span className = "miniPergunta">{faceDaFrenteJSX[contador].props.children}</span>
                        {faceDeTrasJSX[contador]}
                        <div className="setinha">
                            <img className = "iconeVirar" src = "assets/turn.png" onClick = {() => virarCartaEAumentarContador()} data-identifier="arrow"/>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
    
}

