import './App.css'
import Main from './components/Main'
import Sidebar from './components/Sidebar'
import { useState } from 'react';
// need to install to use uuid, "npm i -D react-uuid"
import uuid from "react-uuid";

function App() {

  const [notes, setNotes] = useState([]);

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

  return (
    <>
      <div className='App'>
        <Sidebar onAddNote={onAddNote} notes={notes}/>
        <Main/>
      </div>
    </>
  )
}

export default App
