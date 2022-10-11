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
import NotesInLabel from "./Components/Label/NotesInLabel";
import TaskPage from "./Pages/TaskPage";
import ArchivePage from "./Pages/ArchivePage";

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />


        <Route path="/note" element={<Dashboard />} />
        <Route path="/note/new" element={<AddNote />} />
        <Route path="/note/edit" element={<EditNote />} />
        <Route path="/note/search" element={<SearchPage />} />

        {/* <Route path="/label" element={<NotesInLabel />} /> */}
        <Route path="/label/:id" element={<NotesInLabel />} />

        <Route path="/archive" element={<ArchivePage />} />

        <Route path="/task" element={<TaskPage />} />

        <Route path="/test" element={<Test />} />

        <Route path="/noAccess" element={<NoPageAccess />} />
        <Route path="/*" element={<PageNotFound />} />

      </Routes>
    </>
  );
}

export default App;
