import React from "react";
import Button from "./components/Button";
import Functions from "./components/Functions";
import MathOperations from "./components/MathOperations";
import Result from "./components/Result";

//***** */ IMPORTAR archivos CSS. QUeda disponible para todos los componentes---GLOBAL
import "./App.css";

const App = () => {
  const clickHandlerFunction = (text) => {
    console.log("en app.jsx", text);
  };

  return (
    <main className="react-calculator">
      <Result value={"0"} />
      <Button text="1" clickHandler={clickHandlerFunction} />
    



      <Functions
        onContentClear={() => console.log("Content Clear")}
        onDelete={() => console.log("onDelete")}
      />

      <section className="math-operations">
        <MathOperations
          onClickOperation={(operation) => console.log("Operation:", operation)}
          onClickEqual={(equal) => console.log("Equal:", equal)}
        />
      </section>
    </main>
  );
};

export default App;
