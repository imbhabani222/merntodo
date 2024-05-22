import React, { useEffect, useState } from "react";

const Table = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/displayTask", {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setTasks(data);
      })
      .catch((rejected) => {
        console.log(rejected);
      });
  }, []);

  console.log(tasks);

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Task</th>
            <th scope="col">Edit Action</th>
            <th scope="col">Delete Action</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((ele, index) => (
            <tr key={index}>
              <th scope="row">{index + 1}</th>
              <td>{ele.task}</td>

              <td>
                <button className="btn btn-success justify-center ms-2">
                  Edit
                </button>
              </td>
              <td>
                <button className="btn btn-danger justify-center ms-2">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
