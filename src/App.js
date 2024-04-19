import './toDoList.css'
import {useState} from 'react'; 
import {Task} from './Task'

function App() {
  const [toDoList,setToDoList] = useState([]);
  const [newTask,setNewTask] = useState("");
  
  const handleChange = (event) => {
    setNewTask(event.target.value);
  }

  const updateList = () => {
    const task = {
      id: toDoList.length === 0 ? 1 : toDoList[toDoList.length - 1].id + 1,
      taskName: newTask,
      completed: false,
    };
    // const newToDoList = [...toDoList, task];
    // setToDoList(newToDoList);
    setToDoList([...toDoList, task]);
  }

  const deleteTask = (id) => {
    // const newToDoList = toDoList.filter((task) => task === taskName ? false : true);
    // setToDoList(newToDoList);
    //---------------------------------------
    // setToDoList(toDoList.filter((task) => task === task.taskName ? false : true));
    setToDoList(toDoList.filter((task) => task.id !== id));
  }

  const completedTask = (id) => {
    setToDoList(
      toDoList.map((task) => task.id === id ? {...task, completed: true} : task)
    )
  }

  return (
    <div className="App">
      <div className='addTask'>
        <input onChange={handleChange} /> &nbsp;
        <button onClick={updateList}>Add Task</button>
      </div>
      <div className='list'>
        {toDoList.map((task) => {
          return (
            <Task 
              taskName = {task.taskName} 
              id = {task.id}  
              completed = {task.completed}
              deleteTask={deleteTask}
              completedTask={completedTask}
           />
          )  
      })}
      </div>
    </div>
  );
}

export default App;
