import './App.css'
import Main from './components/Main'
import Sidebar from './components/Sidebar'
import { useState } from 'react';
// need to install to use uuid, "npm i -D react-uuid"
import uuid from "react-uuid";

function App() {
  // An array of notes
  const [notes, setNotes] = useState([]);
  // note which is selected(active)
  const [activeNote, setActiveNote]= useState(false);

  const onAddNote=()=>{
    console.log("New note added.");
    const newNote= {
      // generate random id with uuid
      id:uuid(),
      title: "New note",
      content: "contents of new note",
      modDate: Date.now(),
    };
    // spread syntax
    setNotes([...notes, newNote]);
    console.log(notes);
  };

  // id comes from Sidebar.jsx
  const onDeleteNote = (id) => {
    // filter function (JS)
    const filterNotes = notes.filter((note) => note.id !== id);
    setNotes(filterNotes);
  }

  const getActiveNote = () => {
    // activeNote is set  with onClick in sidebar.jsx
    // return the value of activeNote using find function(JS)
    return notes.find((note) => note.id === activeNote);
  }

  // receive result of function onUpdateNote from Main.jsx as a parameter updatedNote
  const onUpdateNote = (updatedNote) => {
    // return an array of updated notes
    const updatedNotesArray = notes.map((note) => {
      // updated.note means selected note in Main.jsx
      if(note.id === updatedNote.id) {
        console.log(updatedNote);
        // can edit&update only selected note
        return updatedNote;
      } else {
        // cannot update other notes
        return note;
      }
    });
    console.log(updatedNotesArray);
    // can pass updatedNote to sidebar as note
    setNotes(updatedNotesArray);
  }

  return (
    <>
      <div className='App'>
        <Sidebar
          onAddNote={onAddNote}
          notes={notes}
          onDeleteNote={onDeleteNote}
          activeNote={activeNote}
          setActiveNote={setActiveNote}
          />
        <Main
          activeNote={getActiveNote()}
          onUpdateNote={onUpdateNote}
        />
      </div>
    </>
  )
}

export default App
