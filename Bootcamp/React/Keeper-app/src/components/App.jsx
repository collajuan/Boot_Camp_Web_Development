import { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";
import Form from "./Form";

const App = () => {
  const [arrayNotes, setArrayNotes] = useState([]);

  function addNote(newNote) {
    setArrayNotes((prevItems) => {
      return [...prevItems, newNote];
    });
    // event.preventDefault()
    console.log(arrayNotes);
  }

  return (
    <div>
      <Header />
      <Form addNote={addNote} />
      {arrayNotes.map((nota) => (
        <Note key={nota.key} titulo={nota.title} nota={nota.content} />
      ))}
      <Footer />
    </div>
  );
};

export default App;
