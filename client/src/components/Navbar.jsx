import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <div>
      <Link to="/" ><h1>TASQ</h1></Link>
      <ul>
        <Link to="/"><li>Home</li></Link>
        <NavLink to="/new" activeStyle={{display:"none"}}><li>Create</li></NavLink>
      </ul>
    </div>
  )
}
