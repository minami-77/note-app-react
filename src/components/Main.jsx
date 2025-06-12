import React from 'react'
import "./Main.css";
// import react-markdown library
import Markdown from 'react-markdown';

const Main = ({ activeNote, onUpdateNote }) => {
  // Receives key and value from input and textarea
  const onEditNote = (key, value) => {
    onUpdateNote({
      // Use spread syntax to keep other properties
      // ("id: activeNote.id" can only display title or content)
      ...activeNote,
      // Dynamic key (動的キー): either title or content is passed as a key
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
          // When the text changes, it triggers a re-render, and calls onEditNote
          // Passes "title" as a key, e.target.value as a value
          onChange={(e)=>onEditNote("title", e.target.value)}/>
        <textarea
          id="content"
          placeholder="write note contents here."
          value={activeNote.content}
          // When the text changes, it triggers a re-render, and calls onEditNote
          // Passes "content" as a key, e.target.value as a value
          onChange={(e)=>onEditNote("content", e.target.value)}
        ></textarea>
      </div>
      <div className="app-main-note-preview">
        <h1 className="preview-title">{activeNote.title}</h1>
        {/* enclose with component <></> */}
        <div className="markdown-preview">
          <Markdown>
            {activeNote.content}
          </Markdown>
        </div>
      </div>

    </div>
  )
}

export default Main
