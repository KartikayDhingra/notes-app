import React, { useState } from "react";

import Header from './Header';
import Main from './Main';
import {demoNotes} from "./Notes";

const App = () => {
    const [newNotes,setNewNotes] = useState(demoNotes);
    const addHandler = (prevNote) => {
        const newNote = {
            ...prevNote
        }
        setNewNotes( prev => {
            return [newNote,...prev];
        })
    }

    const handleDelete = (noteId) => {
        setNewNotes( prev => {
            return prev.filter((note,index) => {
                return index !== noteId;
            })
        })
    }

  return <div>
      <Header onAddNote={addHandler}/>
      <Main onDelete={handleDelete} notes={newNotes} />
  </div>;
};

export default App;
