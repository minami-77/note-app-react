import React from 'react'
import "./Main.css";

const Main = ({ activeNote, onUpdateNote }) => {
  // receive key and value from input and textarea
  const onEditNote = (key, value) => {
    onUpdateNote({
      // use spread syntax. "id: activeNote.id" can only display title or content
      ...activeNote,
      // Dynamic key (動的キー) can get both title and content as a key
      [key]: value,
      modDate:Date.now()
    })
  }

  if(!activeNote){
    return <div className="no-active-note">Note is not selected</div>
  }
  return (
    <div className="app-main">
      <div className="app-main-note-edit">
        <input
          id="title"
          type="text"
          value={activeNote.title}
          // When text changed, it triggers a re-render, and onEditNote runs again
          // it passes "title" as a key, e.target.value as a value
          onChange={(e)=>onEditNote("title", e.target.value)}/>
        <textarea
          id="content"
          placeholder="write note contents here."
          value={activeNote.content}
          // When text changed, it triggers a re-render, and onEditNote runs again
          // it passes "content" as a key, e.target.value as a value
          onChange={(e)=>onEditNote("content", e.target.value)}
        ></textarea>
      </div>
      <div className="app-main-note-preview">
        <h1 className="preview-title">{activeNote.title}</h1>
        <div className="markdown-preview">{activeNote.content}</div>
      </div>

    </div>
  )
}

export default Main
