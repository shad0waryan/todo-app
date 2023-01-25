import React, { useState, useEffect } from "react";
import "../App.css";
import { v4 as uuidv4 } from "uuid";
import Todolist from "./todolist";
function Todoform() {
  const [task, setTask] = useState("");
  const [time, setTime] = useState("");
  const [edit, setEdit] = useState(null);
  const [todo, setTodo] = useState([]);

  const updateTodo = (id, todoTask, todoTime, completed) => {
    const newTodo = todo.map((todos) =>
      todos.id === id ? { id, todoTask, todoTime, completed } : todo
    );
    setTodo(newTodo);
    setEdit("");
  };

  useEffect(() => {
    if (edit) {
      setTask(edit.todoTask);
      setTime(edit.todoTime);
    } else {
      setTask("");
      setTime("");
    }
  }, [setTask, setTime, edit]);

  const submitHandler = (submit) => {
    submit.preventDefault();
    
    if (!edit) {
      if (task !== "" && time !== "") {
        setTodo([
          ...todo,
          { id: uuidv4(), todoTask: task, todoTime: time, completed: false },
        ]);
      } else {
        alert("Please Enter both task and time");
      }
      setTask("");
      setTime("");
    } else {
      updateTodo(edit.id, edit.todoTask, edit.todoTime, edit.completed);
      
    }
    
  };

  return (
    <div className="app-block">
      <h3 className="heading">TodoList App</h3>
      <form className="todo-form" onSubmit={submitHandler}>
        <input
          className="task-field"
          id="task"
          onChange={(event) => {
            setTask(event.target.value);
          }}
          placeholder="Enter Task"
          value={task}
        />
        <input
          className="time-field"
          id="time"
          onChange={(event) => {
            setTime(event.target.value);
          }}
          placeholder="Remaining Time"
          value={time}
        />
        <button class="add-button">
          <span class="text">Add todo</span>
        </button>
      </form>
      <div>
        <Todolist todo={todo} setTodo={setTodo} edit={edit} setEdit={setEdit} />
      </div>
    </div>
  );
}

export default Todoform;
