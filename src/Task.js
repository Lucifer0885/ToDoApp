
export const Task = (props) => {
  return (
    <div 
      className = "task"
      style={{backgroundColor: props.completed && "Green"}}    
    >
      <h1>{props.taskName}</h1>
        <button onClick={() => props.completedTask(props.id)}>✅</button>
        <button onClick={() => props.deleteTask(props.id)}>X</button>
    </div>
  )
}