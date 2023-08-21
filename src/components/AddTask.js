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
            <label className={textError && "error"}>Tas</label>
            <input
             type="text" 
             placeholder="Add Task"
             className={textError && "form-control error"}
             value={text}
             onChange={(e) => setText(e.target.value)} />
             {textError ? <p className='error'>Please add a Task </p> : ""}
        </div>
        <div className="form-control">
            <label className={dayError && "error"}>Day & Time</label>
            <input
             type="text"
             placeholder="Add Day 
            & Time"
             className={dayError && "form-control error"}
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
