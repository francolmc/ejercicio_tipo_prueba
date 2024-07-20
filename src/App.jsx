import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import './App.css'
import HomePage from "./pages/HomePage";
import ExercisePage from "./pages/ExercisePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/exercise" element={<ExercisePage />} />
      </Routes>
    </Router>
  )
}

export default App
