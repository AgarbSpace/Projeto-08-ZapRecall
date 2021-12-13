import "./style.css"
import miniLogo from "../../assets/logo-mini.png"
import emojiFestivo from "../../assets/party.png"

export default function TelaDeSucesso(){
    return(
        <section className = "telaDeSucesso">
            <img className = "miniLogo" src = {miniLogo}/>
            <div className = "resultado">
                <span>PARABÉNS!</span>
                <img src = {emojiFestivo} />
            </div>
            <span className = "motivo">Você não esqueceu nenhum flashcard!</span>
        </section>
    )
}