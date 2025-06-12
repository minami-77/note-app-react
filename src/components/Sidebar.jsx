import React from 'react'
import "./Sidebar.css";

const Sidebar = ({onAddNote, notes, onDeleteNote, activeNote, setActiveNote}) => {
  // Sort notes to place the latest one comes the first
  const sortedNotes = notes.sort((a,b)=> b.modDate - a.modDate);

  return (
    <div className="app-sidebar">
      <div className="app-sidebar-header">
        <h1>ノート</h1>
        <button onClick={onAddNote}>Add</button>
      </div>
      <div className="app-sidebar-notes">
        {/* Use map function to generate the UI from the notes array */}
        {sortedNotes.map((note) =>
          <div
            // Iterate through the notes array
            // If note.id matches activeNote, the expression (note.id === activeNote) returns true
            // Then "active" is added to the className for CSS styling
            className={`app-sidebar-note ${note.id === activeNote && "active"}`}
            key={note.id}
            // When clicked, set note.id as the new value of activeNote
            // This triggers a re-render, and the map function runs again
            onClick={() => setActiveNote(note.id)}
          >
            <div className="sidebar-note-title">
              <strong>{note.title}</strong>
              {/* use arrow function with parameter. not to ignite when reload */}
              <button onClick={()=>onDeleteNote(note.id)}>Delete</button>
            </div>
            <p>{note.content}</p>
            {/* new Date().toLocaleDateString("ja-JP") :adjust japan time */}
            <small>{new Date(note.modDate).toLocaleDateString("ja-JP", {
              hour: "2-digit",
              minute: "2-digit",
            })}</small>
          </div>
        )}


      </div>
    </div>
  )
}

export default Sidebar
