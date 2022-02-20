import "./App.css";
import React from "react";
import Home from "./pages/Home";
import Login from "./pages/Login";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={true ? <Home /> : <Navigate to="/" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/login/:data" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
