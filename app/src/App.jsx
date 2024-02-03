import "./App.css";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Auth from "./pages/Auth";

function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/" element={<Auth />} />
      </Routes>
    </div>
  );
}

export default App;
