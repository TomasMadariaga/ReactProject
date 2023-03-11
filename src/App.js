import {useState} from 'react'
import "./App.css";
import { ToDoInput } from "./components/ToDoInput/ToDoInput";
import { ToDoList } from "./components/ToDoList/ToDoList";

function App() {
  const [tasks, setTasks] = useState([])
  const [value, setValue] = useState('')

  const addTask = (e) => {setTasks([...tasks, value])}
  return (
    <div className="App">
      <ToDoInput onChange={setValue} addTask={addTask} value={value}/>
      <ToDoList tasks={tasks}/>
    </div>
  );
}

export default App;
