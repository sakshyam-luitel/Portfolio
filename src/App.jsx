import HomePage from "./pages/HomePage"
import ProjectsPage from "./pages/ProjectsPage"
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App(){
  return(
    <>
    <BrowserRouter>
      <Routes>
        <Route element = {<HomePage/>} path = "/"/>
        <Route element = {<ProjectsPage/>} path = "/projects"/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App