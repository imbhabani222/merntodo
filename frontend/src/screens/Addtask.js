import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Addtask = () => {
  const navigate = useNavigate;
  const [newTask, setNewTask] = useState("");
  const handleAddTask = (e) => {
    setNewTask(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:4000/createTask", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          task: newTask,
        }),
      });
      if (!response.ok) {
        throw new Error("Failed to create user. Status: " + response.status);
      }

      const json = await response.json();

      console.log(json);
      if (!json.success) {
        alert("Enter valid task");
      } else {
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label for="exampleInputTask">Task</label>
          <input
            value={newTask}
            type="text"
            className="form-control"
            id="exampleInputTask"
            placeholder="Enter Task"
            onChange={handleAddTask}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Addtask;
