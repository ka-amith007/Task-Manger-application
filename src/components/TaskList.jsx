import React from 'react'
import TaskCard from './TaskCard'

export default function TaskList({ tasks, onDelete, onToggle, onEdit, onUpdate }){
  if(!tasks || tasks.length === 0) return <div className="muted" style={{marginTop:12}}>No tasks to show</div>

  return (
    <div className="task-list">
      {tasks.map(t => (
        <TaskCard key={t.id} task={t} onDelete={onDelete} onToggle={onToggle} onEdit={onEdit} onUpdate={onUpdate} />
      ))}
    </div>
  )
}
