export default function TelaDasCartas(){
    return (
        <section className = "telaDasCartas naoAparece">
            <img className = "miniLogo" src = "assets/logo-mini.png"/>
            <div className = "carta" onclick = "virar(this)">
                <span className = "contador">0/8</span>
                <div  className="face">
                    <span className = "pergunta">O que é JSX?</span>
                </div>
                <div className="face faceDeTras">
                    <span className = "miniPergunta">O que é JSX?</span>
                    <span className = "resposta">Uma extensão de linguagem do JavaScript</span>
                    <div className = "botoesDaCarta">
                        <button className = "botaoPreto">Aprendi agora</button>
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