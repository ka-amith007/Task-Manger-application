import React, { useState, useEffect } from 'react'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'

function App(){
  const [tasks, setTasks] = useState(() => {
    try{
      const raw = localStorage.getItem('tasks');
      return raw ? JSON.parse(raw) : [];
    }catch(e){
      return [];
    }
  })

  const [editingTask, setEditingTask] = useState(null)
  const [statusFilter, setStatusFilter] = useState('all')
  const [priorityFilter, setPriorityFilter] = useState('all')

  useEffect(()=>{
    localStorage.setItem('tasks', JSON.stringify(tasks))
  },[tasks])

  const addTask = (task) => {
    setTasks(prev => [{...task, id: Date.now().toString(), completed:false}, ...prev])
  }

  const updateTask = (id, updates) => {
    setTasks(prev => prev.map(t => t.id === id ? {...t, ...updates} : t))
    setEditingTask(null)
  }

  const deleteTask = (id) => {
    setTasks(prev => prev.filter(t => t.id !== id))
  }

  const toggleComplete = (id) => {
    setTasks(prev => prev.map(t => t.id === id ? {...t, completed: !t.completed} : t))
  }

  const startEdit = (task) => setEditingTask(task)

  const clearFilters = () => { setStatusFilter('all'); setPriorityFilter('all') }

  const filtered = tasks.filter(t => {
    if(statusFilter === 'pending' && t.completed) return false
    if(statusFilter === 'completed' && !t.completed) return false
    if(priorityFilter !== 'all' && t.priority !== priorityFilter) return false
    return true
  })

  return (
    <div className="container">
      <div className="header">
        <h1>Task Manager</h1>
        <div className="muted">Fresher-level React project</div>
      </div>

      <div className="card">
        <TaskForm onAdd={addTask} editingTask={editingTask} onUpdate={updateTask} onCancel={() => setEditingTask(null)} />
      </div>

      <div className="filters">
        <div className="card" style={{padding:'8px'}}>
          <label className="muted">Status:</label>
          <select value={statusFilter} onChange={e => setStatusFilter(e.target.value)} style={{marginLeft:8}}>
            <option value="all">Show All</option>
            <option value="pending">Show Pending</option>
            <option value="completed">Show Completed</option>
          </select>
        </div>

        <div className="card" style={{padding:'8px'}}>
          <label className="muted">Priority:</label>
          <select value={priorityFilter} onChange={e => setPriorityFilter(e.target.value)} style={{marginLeft:8}}>
            <option value="all">All</option>
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
        </div>

        <div style={{display:'flex',alignItems:'center',gap:8}}>
          <button className="btn secondary" onClick={clearFilters}>Clear</button>
        </div>
      </div>

      <div style={{marginTop:12}}>
        <TaskList tasks={filtered} onDelete={deleteTask} onToggle={toggleComplete} onEdit={startEdit} onUpdate={updateTask} />
      </div>
    </div>
  )
}

export default App
