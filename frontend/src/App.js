import "./App.css";
import Addtask from "./screens/Addtask";
import Home from "./screens/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/addtask" element={<Addtask />} />
      </Routes>
    </Router>
  );
}

export default App;
