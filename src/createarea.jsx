import React, { useState } from "react";

function CreateArea(props) {

    const [note,setNote] = useState({
        title: "",
        content: ""
    })
     
    function handlechange(event) {
        const {name , value} = event.target;

        setNote((prevNote)=>{
           return { 
            ...prevNote,
             [name]: value
           }
        })
    }

    function Submitnote(event) {
        props.onAdd(note);
        event.preventDefault();
    }
    return(<div id="container1">
        <form>
            <input type="text" placeholder="Title" value={note.title} className="note" onChange={handlechange} name="title" id="main"></input>
            <textarea name="content" placeholder="Take a note...." rows="3" value={note.content} className="note" onChange={handlechange} id="main1"></textarea>
            <button onClick={Submitnote}>Add</button>
        </form>
    </div>);
}

export default CreateArea;