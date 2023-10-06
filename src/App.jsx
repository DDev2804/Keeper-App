import Heading from "./Header";
import Footer from "./footer";
import Note from "./note";
import CreateArea from "./createarea";
import { useState } from "react";
import React from "react";

function App(props) {

    const [notes,setnotes] = useState([]);
    function addnote(newnote) {
        setnotes((prevNotes)=>{
           return [...prevNotes, newnote]
        })
    }

    function fdelete(id) {
        console.log("Delete");
        setnotes((prevNotes)=>{
            prevNotes.filter((noteitems,index)=>{
                return index !== id;
            });
        });
    }
    
    return (
        <div>
            <Heading/>
            <CreateArea onAdd={addnote}/>   
            {notes?.map((noteitems,index)=>{
                return(
                    <Note
                    key = {index}
                    id = {index}
                    title = {noteitems.title}
                    content = {noteitems.content}
                    onDelete = {fdelete}
                    />
                );   
            })}
            <Footer/>
        </div>
    );
}



export default App;