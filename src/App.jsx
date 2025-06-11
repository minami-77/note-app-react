import './App.css'
import Main from './components/Main'
import Sidebar from './components/Sidebar'
import { useState } from 'react';
// need to install to use uuid, "npm i -D react-uuid"
import uuid from "react-uuid";

function App() {
  // An array of notes
  const [notes, setNotes] = useState([]);
  // The currently selected (active) note
  const [activeNote, setActiveNote]= useState(false);

  const onAddNote=()=>{
    console.log("New note added.");
    const newNote= {
      // Generate a random id with uuid
      id:uuid(),
      title: "New note",
      content: "contents of new note",
      modDate: Date.now(),
    };
    // Spread syntax to add the new note to the array
    setNotes([...notes, newNote]);
    console.log(notes);
  };

  // id comes from Sidebar.jsx
  const onDeleteNote = (id) => {
    // Filter out the note to be deleted using filter() function (JS)
    const filterNotes = notes.filter((note) => note.id !== id);
    setNotes(filterNotes);
  }

  const getActiveNote = () => {
    // activeNote is set  with onClick in sidebar.jsx
    // Return the selected note (value of activeNote) using find() function(JS)
    return notes.find((note) => note.id === activeNote);
  }

  // Receives the updated note (the result of function onUpdateNote) from Main.jsx
  const onUpdateNote = (updatedNote) => {
    // Create a new array of notes with the updated one
    const updatedNotesArray = notes.map((note) => {
      // updatedNote refers to (=means) the note being edited in Main.jsx
      if(note.id === updatedNote.id) {
        console.log(updatedNote);
        // Only update the selected note
        return updatedNote;
      } else {
        // Return the note unchanged
        return note;
      }
    });
    console.log(updatedNotesArray);
    // Update the notes array with modified note
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
