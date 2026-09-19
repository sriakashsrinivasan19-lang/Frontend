import {Link} from "react-router-dom"
const NavBar = () => {
  return (
    <>
    
    <div className="bg-black text-white p-2 flex justify-around items-center">
        <div className="mx-5 bg-white p-2 text-center text-black w-30 rounded-2xl">
            logo
        </div>
        <div className="flex gap-10 mx-5 ">
            <Link to="/">Home </Link>
            <Link to="/About">About</Link>
             <Link to="/Services">Services</Link>
              <Link to="/Courses">Courses</Link>
               <Link to="/Gallery">Gallery</Link>
            <Link to="/Contact">Contact</Link>
            <Link to="/Help">Help</Link>
            <Link to="/NotFound">NotFound</Link>
        </div>
    </div>
    
    </>
  )
}

export default NavBar