import {Route, Routes} from 'react-router-dom'
import NavBar from "./components/NavBar.jsx"
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Help from './pages/Help.jsx'
import Services from './pages/Services.jsx'
import Gallery from './pages/Gallery.jsx'
import Courses from './pages/Courses.jsx'
import NotFound from './pages/NotFound.jsx'



const App = () => {
  return (<>
    
    <NavBar />
    

    <Routes >
      <Route path="/" element={<Home/>} />
      <Route path="/About" element={<About/>} />
      <Route path="/Services" element={<Services/>} />
      <Route path="/Courses" element={<Courses/>} />
      <Route path="/Gallery" element={<Gallery/>} />
      <Route path="/Contact" element={<Contact/>} />
      <Route path="/Help" element={<Help/>} />
      <Route path="/NotFound" element={<NotFound/>} />
    </ Routes>
    

  </>)
}

export default App