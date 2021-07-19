import React from 'react';

const demoNotes= [
    // {
    //     id: "n1",
    //     title: "Javascript",
    //     description: "JavaScript is the world's most popular programming language.JavaScript is the programming language of the Web."
    // },
    // {
    //     id: "n2",
    //     title: "Functions",
    //     description: "A JavaScript function is defined with the function keyword, followed by a name, followed by parentheses ()."
    // },
    // {
    //     id: "n3",
    //     title: "Functions",
    //     description: "A JavaScript function is defined with the function keyword, followed by a name, followed by parentheses ()."
    // },
    // {
    //     id: "n4",
    //     title: "Functions",
    //     description: "A JavaScript function is defined with the function keyword, followed by a name, followed by parentheses ()."
    // }
];

const Notes = (props) => {

    const clickHandler = (event)=> {
        // console.log(event.target.id);
        props.onDelete(props.id);
    }

    return <div className="note">
        <h2 className="note__heading">{props.title}</h2>
        <p className="note__para">{props.description}</p>
        <button onClick={clickHandler} className="note__btn-delete">Delete</button>
    </div>
}


export {demoNotes} ;
export default Notes;