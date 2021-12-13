import "./style.css"
import miniLogo from "../../assets/logo-mini.png"
import emojiTriste from "../../assets/sad.png"

export default function TelaDeFracasso(){
    return(
        <section className= "telaDeFracasso">
            <img className = "miniLogo" src = {miniLogo}/>
            <div className = "resultado">
                <span>Putz..</span>
                <img src = {emojiTriste} />
            </div>
            <span className = "motivo">Você esqueceu alguns flashcards</span>
            <span className = "motivo">Não desanime! Na próxima você consegue</span>    
        </section>
    )
}