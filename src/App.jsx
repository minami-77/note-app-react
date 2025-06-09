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
    return notes.find((note) => note.id === activeNote);
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
          activeNote={getActiveNote}
        />
      </div>
    </>
  )
}

export default App
