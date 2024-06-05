import { Routes, Route } from "react-router-dom";
import Register from "./components/Register";
import Users from "./components/Users";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<h1>Home page</h1>} />
      <Route path="/users" element={<Users />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}
