import './App.css'
import Main from './components/Main'
import Sidebar from './components/Sidebar'
import { useState } from 'react';

function App() {

  const [notes,setNotes] = useState([]);

  const onAddNote=()=>{
    console.log("New note added.");
    const newNote= {
      id:1,
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
        <Sidebar onAddNote={onAddNote}/>
        <Main/>
      </div>
    </>
  )
}

export default App
