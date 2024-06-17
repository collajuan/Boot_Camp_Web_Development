import React from "react"
import Result from "./components/Result"
import Button from "./components/Button"

//***** */ IMPORTAR archivos CSS. QUeda disponible para todos los componentes---GLOBAL
import './App.css'


const App = ()=>{
    return (<main className="react-calculator"> 
        <Result  value={"0"}/>
        <Button text="1" clickHandler={text=>{
            console.log(text)
        }} />
    </main>)
}

export default App