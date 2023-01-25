import React from "react";
import { FaTrash } from "react-icons/fa";
import { AiFillEdit } from "react-icons/ai";
import { BsCheckCircleFill } from "react-icons/bs";
import "../App.css";
const Todolist = ({ edit, setEdit, todo, setTodo }) => {
  const handleDelete = ({ id }) => {
    setTodo(todo.filter((obj) => obj.id !== id));
  };

  const handleEdit = ({ id }) => {
    const find = todo.find((obj) => obj.id === id);
    setEdit(find);
    
  };

  const handleComplete = (obj) => {
    setTodo(
      todo.map((item) => {
        if (item.id === obj.id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      })
    );
  };

  return (
    <div>
      {todo.map((obj, index) => {
        return (
          <div className="list-blocks">
            <li className="list" key={obj.id}>
              <p>
                <h2 className="numbering">{index + 1})</h2>Todo: {obj.todoTask}
              </p>
              <p>Remaining Time: {obj.todoTime}</p>
              <p>Completed: {obj.completed ? "YES" : "NO"}</p>
            </li>
            <div className="task-buttons">
              <BsCheckCircleFill
                size={25}
                onClick={() => handleComplete(obj)}
                className="complete-buttons"
              />
              <AiFillEdit
                size={25}
                onClick={() => handleEdit(obj)}
                className="edit-buttons"
              />
              <FaTrash
                size={25}
                onClick={() => {
                  handleDelete(obj);
                }}
                className="delete-buttons"
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Todolist;

// {/* <input
//         className="list-item"
//           type="text"
//           value={obj.todoTask}
//           onChange={(e) => {
//             e.preventDefault();
//           }}
//         /> */}
