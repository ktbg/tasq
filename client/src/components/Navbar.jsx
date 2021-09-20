import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className="border-2 border-red-500">
      <div className="float-left border-2 border-blue-500">
        <Link to="/"><h1>TASQ</h1></Link>
      </div>
      <div className="float-right">  
        <ul>
          <Link to="/"><li>Home</li></Link>
          <NavLink to="/new" activeStyle={{display:"none"}}><li>Create</li></NavLink>
        </ul>
      </div>
    </div> 
  )
}
