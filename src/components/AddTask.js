import { useState } from 'react'

const AddTask = ({ onAdd }) => {
   const [text, setText] = useState('')
   const [day, setDay] = useState('') 
   const [reminder, setReminder] = useState(false)  
   const [error, setError] = useState(false) 

   const onSubmit = (e) => {
    e.preventDefault()
    if (!text) {
        setError(prev => ({
            ...prev,
            task: true,
        })) 
        return
    } 
     if (!day) {
        setError(prev => ({
            ...prev,
            time: true
        }))
        return
    }
    onAdd({ text, day, reminder })

    setText('')
    setDay('')
    setError(false)
    setReminder(false)
   }
  return (
    <form className="add-form" onSubmit={onSubmit}>
        <div className="form-control">
            <label>Task</label>
            <input
             type="text" 
             placeholder="Add Task"
             value={text}
             onChange={(e) => setText(e.target.value)} />
             {error.task ? <p className='error'>Please add a Task</p> : ""}
        </div>
        <div className="form-control">
            <label>Day & Time</label>
            <input
             type="text"
             placeholder="Add Day 
            & Time"
             value={day}
             onChange={(e) => setDay(e.target.value)} />
             {error.time ? <p className='error'>Please add a Day & Time</p> : ""}
        </div>
        <div className="form-control form-control-check">
            <label>Set Reminder</label>
            <input 
            type="checkbox"
            checked={reminder} 
            value={reminder}
            onChange={(e) => setReminder(e.currentTarget.checked)}/>
        </div>

        <input type="submit" value="Save Task"
        className="btn btn-block" />
    </form>
  )
}

export default AddTask
