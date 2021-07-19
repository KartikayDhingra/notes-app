import React from "react";
import Notes from "./Notes";

const Main = (props) => {

    const handleDelete = (noteId) => {
        props.onDelete(noteId);
    }

  return (
    <main>
      <div className="main">
        {props.notes.map((note,index) => {
          return <Notes onDelete={handleDelete} key={index} id={index} title={note.title} description={note.description} />;
        })}
      </div>
    </main>
  );
};

export default Main;
