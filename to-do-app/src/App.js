import React, { useState } from "react";
import "./App.css";

// A todo app where the user can type in a todo and it will be added to the list
// of todos. The user can also edit and remove a todo from the list.
function App() {
	// TODOs: create two states here.
  // The state of the app is stored in the todos array.
	// The state of the input value should also be stored in a state.

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
        <div className="TODOItem" key={index}>
          <div className="TODOItemText">
            <p>A dummy TODO</p>
          </div>
          <div className="TODOItemDelete">
            <button className="TODOItemButton">Remove</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;