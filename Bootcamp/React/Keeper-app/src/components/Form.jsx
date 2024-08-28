import { useState } from "react";

function Form(props) {
  const [nota, setNota] = useState({
    title: "",
    content: "",
  });

  function handleChange(event) {
    const { value, name } = event.target;

    setNota((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }

  return (
    <div>
      <form>
        <input
          onChange={handleChange}
          name="title"
          placeholder="Title"
          value={nota.titulo}
        />
        <textarea
          onChange={handleChange}
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={nota.texto}
        />
        <button
          onClick={(event) => {
              props.addNote(nota);
              event.preventDefault();
          }}
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default Form;
