import React, { useState } from 'react'
import TaskForm from './TaskForm'

function getPrioClass(p){
  if(p === 'Low') return 'prio-low'
  if(p === 'Medium') return 'prio-med'
  return 'prio-high'
}

export default function TaskCard({ task, onDelete, onToggle, onEdit, onUpdate }){
  const [isEditing, setIsEditing] = useState(false)

  const handleEdit = () => {
    // support inline edit
    setIsEditing(true)
  }

  const handleSave = (idUpdates, updates) => {
    // TaskForm calls onUpdate with id and updates
    onUpdate(task.id, updates)
    setIsEditing(false)
  }

  return (
    <div className="card">
      {isEditing ? (
        <TaskForm editingTask={task} onUpdate={(id, data) => handleSave(id, data)} onCancel={() => setIsEditing(false)} />
      ) : (
        <>
          <div style={{display:'flex',justifyContent:'space-between',alignItems:'start'}}>
            <div style={{flex:1}}>
              <h4 className={`task-title ${task.completed ? 'completed' : ''}`}>{task.title}</h4>
              {task.description && <div className="muted">{task.description}</div>}
              <div style={{display:'flex',gap:8,marginTop:8,alignItems:'center'}}>
                <div className={`priority-badge ${getPrioClass(task.priority)}`}>{task.priority}</div>
                {task.dueDate && <div className="task-due muted">Due: {task.dueDate}</div>}
              </div>
            </div>
          </div>

          <div className="task-actions">
            <button className="btn secondary" onClick={() => onToggle(task.id)}>{task.completed ? 'Mark Pending' : 'Mark Complete'}</button>
            <button className="btn secondary" onClick={handleEdit}>Edit</button>
            <button className="btn secondary" onClick={() => { if(window.confirm('Delete this task?')) onDelete(task.id) }}>Delete</button>
          </div>
        </>
      )}
    </div>
  )
}
