import React, { useState } from "react";
import "./App.css";

function Todo({ todo, index, removeTodo}) {
  return (
    <div className="TODOList">
      <div className = "TODOItem">
        <div className = "TODOItemText">
          <p>{todo.text}</p> 
        </div>
      </div>
      <div className="TODOItemDelete">
            <button className="TODOItemButton" onClick={() => removeTodo(index)} >
              Remove
              </button>
          </div>
    </div>
    
  );
};

function TodoForm({ addTodo }) {
  const [value, setValue] = React.useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="input"
        value={value}
        onChange={e => setValue(e.target.value)}
      />
    </form>
  );
}

// A todo app where the user can type in a todo and it will be added to the list
// of todos. The user can also edit and remove a todo from the list.
function App() {
	// TODOs: create two states here.
  // The state of the app is stored in the todos array.
	// The state of the input value should also be stored in a state.
  const [todos, setTodos] = React.useState([
    { text: "Go to RSF" }
  ]);

  // Input
  const [value, setValue] = React.useState("");
  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="TODOContainer">
      <div className="TODOInput">
        <input
          type="text"
          placeholder="Add a new todo"
          value = {value}
          onChange={e => setValue(e.target.value)}
        />
        <button onClick={() => addTodo(value)}>
          Add
        </button>
      </div>
      <div className="TODOList">
				{/* TODO: consider mapping the todo array here into a list
									of TODO items */}
        {todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
            removeTodo={removeTodo}
          />
        ))}
        <div className="TODOItem">
          <div className="TODOItemText">
            <p>Finish WDB HWs</p>
          </div>
          
          <div className="TODOItemDelete">
            <button className="TODOItemButton" >
              Remove
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;