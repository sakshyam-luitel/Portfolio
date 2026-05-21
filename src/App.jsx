import HomePage from "./pages/HomePage"
import ProjectsPage from "./pages/ProjectsPage"
import Skills from "./pages/Skills"
import Education from "./pages/Education"
import Experience from "./pages/Experience"
import Blogs from "./pages/Blogs"
import Contacts from "./pages/Contacts"
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App(){
  return(
    <>
    <BrowserRouter>
      <Routes>
        <Route element = {<HomePage/>} path = "/"/>
        <Route element = {<ProjectsPage/>} path = "/projects"/>
        <Route element = {<Skills/>} path = "/skills"/>
        <Route element = {<Education/>} path = "/education"/>
        <Route element = {<Experience/>} path = "/experience"/>
        <Route element = {<Blogs/>} path = "/blogs"/>
        <Route element = {<Contacts/>} path = "/contacts"/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App