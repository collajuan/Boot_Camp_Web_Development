import React from "react";
// import Button from "./components/Buttoon/Button";
import Functions from "./components/Functions";
import MathOperations from "./components/MathOperations";
import Numbers from "./components/Numbers";
import Result from "./components/Result";

//***** */ IMPORTAR archivos CSS. QUeda disponible para todos los componentes---GLOBAL
import "./App.css";

const App = () => {
  return (
    <main className="react-calculator">
      <Result value={undefined} />
      <Numbers
        onClickNumber={(number) => {
          console.log("Click en number", number);
        }}
      />
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
