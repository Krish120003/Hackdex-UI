import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

function App() {
  const isAuth = true;
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          exact
          element={isAuth ? <Home /> : <Navigate to="/" />}
        />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
