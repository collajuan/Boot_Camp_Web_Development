import React from "react"
import Button from "./components/Button"
import MathOperations from "./components/MathOperations"
import Result from "./components/Result"

//***** */ IMPORTAR archivos CSS. QUeda disponible para todos los componentes---GLOBAL
import './App.css'


const App = ()=>{
    const clickHandlerFunction = text => {
        console.log("en app.jsx", text)
    }

    return (<main className="react-calculator"> 
        <Result  value={"0"}/>
        <Button text="1" clickHandler={clickHandlerFunction} />
        <section className="math-operations">
            <MathOperations
            onClickOperation={operation => 
                console.log("Operation:", operation)
            }
            onClickEqual={equal => 
                console.log("Equal:", equal)
            }/>
        </section>
    </main>)
}

export default App