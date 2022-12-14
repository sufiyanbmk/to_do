import './App.css';
import { useState } from 'react';
function App() {
  const [toDos,setTodos]=useState([])
  const [task,setTask]=useState('')
  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's Wednesday 🌝 ☕ </h2>
      </div>
      <div className="input">
        <input value={task} onChange={(e)=>setTask(e.target.value)} type="text" placeholder="🖊️ Add item..." />
        <i onClick={()=>setTodos([...toDos,{id:Date.now(),task,status:false}])} className="fas fa-plus"></i>
      </div>
      <div className="todos">
        {
          toDos.map((element)=>{
            return( 
            <div className="todo" key={element.id}>
            <div className="left">
              <input
              onChange={(e)=>{
                setTodos(toDos.filter((obj)=>{
                  if(obj.id === element.id){
                    obj.status=e.target.checked
                  }
                  return obj
                }))
              }} 
              value={element.status} type="checkbox" name="" id="" />
              <p>{element.task}</p>
            </div>
            <div className="right">
              <i className="fas fa-times"></i>
            </div>
          </div>)
          })
        }
       
      </div>
    </div>
  );
}

export default App;