// eslint no-eval:0
import React, { useState } from "react";
import words from "lodash.words"
// import Button from "./components/Buttoon/Button";
import Functions from "./components/Functions";
import MathOperations from "./components/MathOperations";
import Numbers from "./components/Numbers";
import Result from "./components/Result";

//***** */ IMPORTAR archivos CSS. QUeda disponible para todos los componentes---GLOBAL
import "./App.css";

const App = () => {
  // Array Destructuring
  const [stack, setStack] = useState("");
    //devuelve un array de stack per son los signos indicados
  const items = words(stack, /[^-^+^*^/]+/g)
//   condicional como un if
  const value = items.length > 0 ? items[items.length-1]:"0";

  return (
    <main className="react-calculator">
    {/* muestra unicamente el ultimo valor del array de numeros sin los signos */}
      <Result value={value} />
      <Numbers
        onClickNumber={(number) => {
          console.log("Click en number", number);
          setStack(`${stack}${number}`);
        }}
      />
      <Functions
        onContentClear={() => {
          console.log("Content Clear");
          setStack("");
        }}
        onDelete={() => {
          console.log("onDelete");
          if (stack.length > 0) {
            const newStack = stack.substring(0, stack.length - 1);
            setStack(newStack);
          }
        }}
      />
      <section className="math-operations">
        <MathOperations
          onClickOperation={(operation) => {
            console.log("Operation:", operation);
            setStack(`${stack}${operation}`);
          }}
          onClickEqual={(equal) => {
            console.log("Equal:", equal);
            //eval - hace funciones en js segun lo q se pasa
            setStack(eval(stack.toString()));
          }}
        />
      </section>
    </main>
  );
};

export default App;
