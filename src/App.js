import { Route, Routes, useNavigate } from "react-router-dom"


import './App.css';
import './Components/Note/Notes.css'
import './Components/Label/Label.css'
import './Components/Dashboard/Dashboard.css'
import './Components/Auth/Auth.css'



import Test from "./Components/Global/Test";
import Dashboard from "./Pages/Dashboard";

import Home from "./Pages/Home"
import AddNote from "./Components/Note/AddNote";
import EditNote from "./Components/Note/EditNote";
import Register from "./Components/Auth/Register";
import Login from "./Components/Auth/Login";

function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/new" element={<AddNote />} />
        <Route path="/edit" element={<EditNote />} />

        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

        <Route path="/home" element={<Home />} />

        <Route path="/test" element={<Test />} />
      </Routes>
    </>
  );
}

export default App;
