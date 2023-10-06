import React from "react";

function Note(props) {

    function handleClick() {
       props.onDelete(props.id)
    }
    return <div id="container">
        <h1 className="note">{props.title}</h1>
        <p className="note">{props.content}</p>
        <button onClick={handleClick}>Delete</button>
    </div>
}

export default Note;