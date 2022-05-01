import React, { useState } from "react";
import "./App.css";

function Todo({ todo }) {
  return (
    <div className="TODOList">
      <div className = "TODOItem">
        <div className = "TODOItemText">
          { todo.text}
        </div>
      </div>
    </div>
  );
};

// A todo app where the user can type in a todo and it will be added to the list
// of todos. The user can also edit and remove a todo from the list.
function App() {
	// TODOs: create two states here.
  // The state of the app is stored in the todos array.
	// The state of the input value should also be stored in a state.
  let todoArray = [];
  const [todos, setTodos] = React.useState([
    { text: "Learn about React" },
    { text: "Build really cool todo app" }
  ]);

  return (
    <div className="TODOContainer">
      <div className="TODOInput">
        <input
          type="text"
          placeholder="Add a new todo"
        />
        <button>
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
          />
        ))}
        <div className="TODOItem">
          <div className="TODOItemText">
            <p>A dummy TODO</p>
          </div>
          
          <div className="TODOItemDelete">
            <button className="TODOItemButton">
              Remove
              </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;