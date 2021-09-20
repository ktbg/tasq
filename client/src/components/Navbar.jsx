import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div>
      <Link to="/" ><h1>TASQ</h1></Link>
      <ul>
        <Link to="/"><li>Home</li></Link>
        <Link to="/new"><li>Create</li></Link>
      </ul>
    </div>
  )
}
