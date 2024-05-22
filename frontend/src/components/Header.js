import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const handleAddTask = () => {
    navigate("/addtask");
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success">
      <div className="container-fluid">
        <Link className="navbar-brand fs-1 fst-italic" to="/">
          ToDoList
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav me-auto mb-2">
            <Link className="nav-link active fs-5" aria-current="page" to="/">
              Home
            </Link>
          </div>
        </div>
        <div className="navbar-nav me-auto mb-2">
          <button
            type="button"
            onClick={handleAddTask}
            className="btn btn-light justify-center ms-2"
          >
            Add Task
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
