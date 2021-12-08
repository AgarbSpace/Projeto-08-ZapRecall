export default function TelaDeInicio(){
    return (
        <div>
            <section className="telaDeInicio naoAparece">
                <img className="logoDoInicio" src="assets/logo.png" />
                <button className="botaoDeInicio">
                    <span>Praticar React</span>
                    <img src="assets/next.png"/>
                </button>
            </section>
        </div>
    )
}