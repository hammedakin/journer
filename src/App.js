import { Route, Routes } from "react-router-dom"


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
import PageNotFound from "./PageNotFound";
import NoPageAccess from "./Pages/NoPageAccess";
import SearchPage from "./Components/Note/SearchPage";

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

      
          <Route path="/app" element={<Dashboard />} />
          <Route path="/edit" element={<EditNote />} />
          <Route path="/new" element={<AddNote />} />
          <Route path="/search" element={<SearchPage />} />


        <Route path="/test" element={<Test />} />

        <Route path="/noAccess" element={<NoPageAccess />} />
        <Route path="/*" element={<PageNotFound />} />

      </Routes>
    </>
  );
}

export default App;
