import { useState } from "react";

const Todo = () => {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);
  const handleChange = () => {
    if (task.trim() !== "") {
      setTodos([...todos, task]);
      setTask("");
    }
  };
  const handleDelete = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };
  return (
    <div>
      <h1>Todo Component</h1>
      <label htmlFor="Task">Enter the Task:</label>
      <input
        type="text"
        id="Task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={handleChange}>Add task</button>

      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Todo;
