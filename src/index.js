import ReactDOM from "react-dom";
import React from "react";

import TelaDeInicio from "./componentes/TelaDeInicio";
import TelaDasCartas from "./componentes/TelaDasCartas";
import TelaDeSucesso from "./componentes/TelaDeSucesso";
import TelaDeFracasso from "./componentes/TelaDeFracasso";

function App(){
    return(
        <>
            <TelaDeInicio />
            <TelaDasCartas />
            <TelaDeSucesso />
            <TelaDeFracasso />
        </>
    )
}

ReactDOM.render(App(), document.querySelector(".root"));