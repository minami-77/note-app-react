import React from 'react'
import "./Sidebar.css";

const Sidebar = ({onAddNote}) => {
  return (
    <div className="app-sidebar">
      <div className="app-sidebar-header">
        <h1>ノート</h1>
        <button onClick={onAddNote}>Add</button>
      </div>
      <div className="app-sidebar-notes">
        <div className="app-sidebar-note">
          <div className="sidebar-note-title">
            <strong>Title</strong>
            <button>Delete</button>
          </div>
          <p>ノートの内容です。</p>
          <small>最後の修正日：××/××</small>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
