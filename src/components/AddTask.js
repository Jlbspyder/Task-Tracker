import { useState } from 'react'

const AddTask = ({ onAdd }) => {
   const [text, setText] = useState('')
   const [day, setDay] = useState('') 
   const [reminder, setReminder] = useState(false)  
   const [textError, setTextError] = useState(false) 
   const [dayError, setDayError] = useState(false) 

   const onSubmit = (e) => {
    e.preventDefault()
    if (text === '' || day === '') {
        setTextError(true);
        setDayError(true);
        } else {
   
    onAdd({ text, day, reminder })

    setText('')
    setDay('')
    setTextError(false)
    setDayError(false)
    setReminder(false)
    }
   }
  return (
    <form className="add-form" onSubmit={onSubmit}>
        <div className="form-control">
            <label className={error.task && "error"}>Task</label>
            <input
             type="text" 
             placeholder="Add Task"
             className={error.task && "form-control error"}
             value={text}
             onChange={(e) => setText(e.target.value)} />
             {textError ? <p className='error'>Please add a </p> : ""}
        </div>
        <div className="form-control">
            <label className={error.time && "error"}>Day & Time</label>
            <input
             type="text"
             placeholder="Add Day 
            & Time"
             className={error.time && "form-control error"}
             value={day}
             onChange={(e) => setDay(e.target.value)} />
             {dayError ? <p className='error'>Please add a Day & Time</p> : ""}
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
