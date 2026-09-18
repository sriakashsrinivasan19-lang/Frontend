import {Route, Routes} from 'react-router-dom'
import NavBar from "./components/NavBar.jsx"
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Help from './pages/Help.jsx'


const App = () => {
  return (<>
    
    <NavBar />
    

    <Routes >
      <Route path="/" element={<Home/>} />
      <Route path="/About" element={<About/>} />
      <Route path="/Contact" element={<Contact/>} />
      <Route path="/Help" element={<Help/>} />
    </ Routes>
    

  </>)
}

export default App