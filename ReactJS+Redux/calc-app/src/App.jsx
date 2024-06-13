import React from "react"
//***** */ IMPORTAR archivos CSS. QUeda disponible para todos los componentes---GLOBAL
import './App.css'
import Result from "./components/Result"


const App = ()=>{
    return (<main className="react-calculator"> 
        <Result />
    </main>)
}

export default App