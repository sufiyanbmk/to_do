import "./App.css";
import { useState } from "react";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content';
const MySwal = withReactContent(Swal)

function App() {
  const [toDos, setTodos] = useState([]);
  const [task, setTask] = useState("");
  const [deleted, setDeleted] = useState([]);

  function validate(value){
    if(value.length>0){
      setTodos([...toDos, { id: Date.now(), task:value, status: false }])
      setTask('')
    }
    else{
      MySwal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please enter a value!',
      })
    }
  }

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
        <input
          value={task}
          onChange={(e) => setTask(e.target.value)}
          type="text"
          placeholder="🖊️ Add item..."
        />
        <i
          onClick={() =>
            validate(task)
          }
          className="fas fa-plus"
        ></i>
      </div>
      <div className="todos">
        {toDos.map((element) => {
          return (
            <div className="todo" key={element.id}>
              <div className="left">
                <input
                  onChange={(e) => {
                    setTodos(
                      toDos.filter((obj) => {
                        if (obj.id === element.id) {
                          obj.status = e.target.checked;
                        }
                        return obj;
                      })
                    );
                  }}
                  value={element.status}
                  type="checkbox"
                  name=""
                  id=""
                />
                <p>{element.task}</p>
              </div>
              <div className="right">
                <i
                  onClick={() =>
                    setTodos(
                      toDos.filter((obj) => {
                        if (obj.id === element.id) {
                          setDeleted([...deleted, obj]);
                          return null;
                        }
                        return obj;
                      })
                    )
                  }
                  className="fas fa-times"
                ></i>
              </div>
            </div>
          );
        })}
      </div>
      <Completed />
      <Removed />
    </div>
  );

  function Completed() {
    return (
      <div style={{ paddingTop: 50 }}>
        <h2>Completed Tasks</h2>
        {toDos.map((element) => {
          if (element.status) {
            return <h2 key={element.id}>{element.task}</h2>;
          } else {
            return null;
          }
        })}
      </div>
    );
  }

  function Removed() {
    return (
      <div style={{ paddingTop: 50 }}>
        <h2>Deleted Tasks</h2>
        {deleted.map((element) => {
            return <h2 key={element.id}>{element.task}</h2>;
        })}
      </div>
    );
  }
}

export default App;
