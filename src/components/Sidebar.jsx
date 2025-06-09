import React from 'react'
import "./Sidebar.css";

const Sidebar = ({onAddNote, notes, onDeleteNote}) => {
  return (
    <div className="app-sidebar">
      <div className="app-sidebar-header">
        <h1>ノート</h1>
        <button onClick={onAddNote}>Add</button>
      </div>
      <div className="app-sidebar-notes">
      {/* map関数 */}
        {notes.map((note) =>
          <div className="app-sidebar-note" key={note.id}>
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
