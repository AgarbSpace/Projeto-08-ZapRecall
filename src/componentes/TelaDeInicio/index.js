import "./style.css"
import logo from "../../assets/logo.png"
import next from "../../assets/next.png"

export default function TelaDeInicio({botaoInicio, setBotaoInicio}){
    return (
        <div>
            <section className="telaDeInicio" data-identifier="start-zap-recall">
                <img className="logoDoInicio" src={logo} />
                <button className="botaoDeInicio" onClick = {() => setBotaoInicio(botaoInicio+1)}>
                    <span>Praticar React</span>
                    <img src={next}/>
                </button>
            </section>
        </div>
    )
}