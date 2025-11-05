import React, { useEffect, useState } from 'react'

const empty = { title:'', description:'', priority:'Low', dueDate:'' }

export default function TaskForm({ onAdd, editingTask, onUpdate, onCancel }){
  const [form, setForm] = useState(empty)
  const [error, setError] = useState('')

  useEffect(()=>{
    if(editingTask){
      setForm({
        title: editingTask.title || '',
        description: editingTask.description || '',
        priority: editingTask.priority || 'Low',
        dueDate: editingTask.dueDate || ''
      })
    }else{
      setForm(empty)
    }
  },[editingTask])

  const handleChange = e => {
    const { name, value } = e.target
    setForm(f => ({...f, [name]: value}))
  }

  const handleSubmit = e => {
    e.preventDefault()
    if(!form.title.trim()){
      setError('Title is required')
      return
    }
    setError('')
    if(editingTask){
      onUpdate(editingTask.id, form)
    }else{
      onAdd(form)
      setForm(empty)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:8}}>
        <h3 style={{margin:0}}>{editingTask ? 'Edit Task' : 'Add Task'}</h3>
        {editingTask && <button type="button" className="btn secondary" onClick={onCancel}>Cancel</button>}
      </div>

      <div className="form-row">
        <div>
          <label className="muted">Title *</label>
          <input name="title" value={form.title} onChange={handleChange} />
        </div>
        <div>
          <label className="muted">Priority</label>
          <select name="priority" value={form.priority} onChange={handleChange}>
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
          </select>
        </div>
      </div>

      <div style={{marginBottom:8}}>
        <label className="muted">Description</label>
        <textarea name="description" value={form.description} onChange={handleChange} />
      </div>

      <div style={{marginBottom:8}}>
        <label className="muted">Due Date</label>
        <input type="date" name="dueDate" value={form.dueDate} onChange={handleChange} />
      </div>

      {error && <div className="error">{error}</div>}

      <div style={{marginTop:8,display:'flex',gap:8}}>
        <button className="btn" type="submit">{editingTask ? 'Save' : 'Add Task'}</button>
      </div>
    </form>
  )
}
