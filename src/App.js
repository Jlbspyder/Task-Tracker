import { useState} from 'react' 
import { BrowserRouter as Router, Route, Routes  } from "react-router-dom";
import Header from './components/Header'
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import Footer from './components/Footer';
import About from './components/About';

function App() {
  const [showTask, setShowTask] = useState(false)
  const [tasks, setTasks] = useState([])

// Add Task
const addTask = (task) => {
  const id = Math.floor(Math.random() * 10000) + 1
   const newTask = { id, ...task}
   setTasks([...tasks, newTask])
}
 
// Delete Task
const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !== id))
}

// Toggle Reminder
const toggleReminder = (id) => {
  setTasks(
    tasks.map((task) =>
    task.id === id ? {...task, reminder:
    !task.reminder} : task)
  )
}  
  return (
  <Router>
    <div className="container">
      <Header onAdd={() => setShowTask(!showTask)}
      showAdd={showTask}/> 
      
    <Routes>
      <Route path='/' exact element={
        <>
          {showTask && <AddTask onAdd={addTask}/>}
          {tasks.length > 0 ? (<Tasks tasks={tasks}
          onDelete={deleteTask} onToggle={toggleReminder}/>) : ('No Tasks to Display')}
        </>
      } />
      <Route path='/About' element={<About />} />
    </Routes>
      <Footer />
    </div>
  </Router>
  );
}

export default App;
   