export default function TelaDeInicio({botaoInicio, setBotaoInicio}){
    return (
        <div>
            <section className="telaDeInicio">
                <img className="logoDoInicio" src="assets/logo.png" />
                <button className="botaoDeInicio" onClick = {() => setBotaoInicio(botaoInicio+1)}>
                    <span>Praticar React</span>
                    <img src="assets/next.png"/>
                </button>
            </section>
        </div>
    )
}