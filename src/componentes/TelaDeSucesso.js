export default function TelaDeSucesso(){
    return(
        <section className = "telaDeSucesso naoAparece">
            <img className = "miniLogo" src = "assets/logo-mini.png"/>
            <div className = "resultado">
                <span>Parabéns!</span>
                <img src = "assets/party.png" />
            </div>
            <span className = "motivo">Você não esqueceu nenhum flashcard!</span>
        </section>
    )
}