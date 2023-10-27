import React, { useState } from "react";
import Checkbox from "./Checkbox";

const TodoItem = ({
  todo,
  handleCompleteTodo,
  handleDeleteTodo,
  handleEditTodo,
}) => {
  const [edit, setEdit] = useState(false);

  const [value, setValue] = useState(todo.value ?? "");
  const [priority, setPriority] = useState("");

  const handleTodoInput = (event) => {
    const value = event.target.value;
    setValue(value);
  };

  const handlePriority = (event) => {
    setPriority(event.target.value);
  };

  const handleSave = (todoId) => {
    const editedTodo = {
      ...todo,
      value: value ?? todo.value,
      priority: priority ?? todo.priority,
    };

    handleEditTodo(editedTodo, todoId);
    setEdit(false);
  };

  return (
    <div
      key={todo.id}
      className={`my-2 rounded-lg flex flex-row items-center justify-between mx-2 p-3 ${
        todo.priority === "1"
          ? "bg-red-700"
          : todo.priority === "2"
          ? "bg-green-700"
          : "bg-yellow-400"
      }`}
    >
      {!edit ? (
        <>
          <div className="flex flex-row items-center space-x-2">
            <p className={`text-sm font-normal`}>{todo.value} </p>
          </div>
          <div>
            <button
              className="rounded-md bg-red-600 py-1 px-3 text-xs text-white mx-1"
              onClick={() => handleDeleteTodo(todo.id)}
            >
              Delete
            </button>
            <button
              className="rounded-md bg-green-600 py-1 px-3 text-xs text-white"
              onClick={() => setEdit(true)}
            >
              Edit
            </button>
          </div>{" "}
        </>
      ) : (
        <div className="flex flex-row items-center space-x-2">
          <p
            className={`text-sm font-normal ${
              todo.completed ? "line-through" : ""
            }`}
          >
            <input
              value={value}
              onChange={handleTodoInput}
              className="text-slate-900 focus:outline focus:outline-green-700 rounded-lg border border-teal-700 px-3 py-2 outline-none my-1"
            />
            <select
              onChange={handlePriority}
              defaultValue={todo.priority}
              className="text-slate-900 focus:outline focus:outline-green-700 rounded-lg border border-teal-700 px-3 py-2 outline-none my-1"
            >
              <option value="1">High</option>
              <option value="2">Medium</option>
              <option value="3">Low</option>
            </select>
            <div>
              <button
                onClick={() => handleSave(todo.id)}
                className="px-3 py-1 bg-red-600 rounded-md text-xs mr-1"
              >
                Save
              </button>
              <button
                onClick={() => setEdit(false)}
                className="px-3 py-1 bg-gray-600 rounded-md text-xs mr-1"
              >
                Cancel
              </button>
            </div>
          </p>
        </div>
      )}
    </div>
  );
};

export default TodoItem;
