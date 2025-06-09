import React from 'react'
import "./Main.css";

const Main = () => {
  return (
    <div className="app-main">
      <div className="app-main-note-edit">
        <input type="text" />
        <textarea id="" placeholder="write note contents here."></textarea>
      </div>
      <div className="app-main-note-preview">
        <h1 className="preview-title">Title</h1>
        <div className="markdown-preview">Contents of the note</div>
      </div>

    </div>
  )
}

export default Main
