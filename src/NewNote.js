import React, {useState} from "react";

const NewNote = (props) => {
  const [newNoteTitle, setNoteTitle] = useState("");
  const [newDescription, setDescription] = useState("");

  const getTitleHandler = (event) => {
    setNoteTitle(event.target.value);
  };

  const getDescriptionHandler = (event) => {
    setDescription(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const newNote = {
        title: newNoteTitle,
        description: newDescription
    }
    props.onAddNote(newNote);
    setNoteTitle("");
    setDescription("");
  };

  return (
    <div className="add-note">
      <form onSubmit={submitHandler} className="add-note__form">
        <div className="add-note__title">
          <input
            onChange={getTitleHandler}
            className=""
            type="text"
            placeholder="Title"
            value={newNoteTitle}
          />
        </div>
        <div className="add-note__desc">
          <textarea
            onChange={getDescriptionHandler}
            placeholder="Description"
            value={newDescription}
            rows="3"
          ></textarea>
        </div>
        <button className="add-note__btn" type="submit">
          +
        </button>
      </form>
    </div>
  );
};

export default NewNote;
