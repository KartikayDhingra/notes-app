import React from 'react';
import NewNote from "./NewNote";

const Header = (props) => {

    const addHandler = (prevNote) => {
        props.onAddNote(prevNote);
    }

    return <header>
        <h1 className="header__heading">Notes app</h1>
        <NewNote onAddNote={addHandler} />
    </header>
}

export default Header;