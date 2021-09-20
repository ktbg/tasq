import { Link, NavLink } from 'react-router-dom'
import '../index.css';

export default function Navbar() {
  return (
    <div className="border-2 border-red flex justify-between px-4">
      <div className="">
        <Link to="/"><h1>TASQ</h1></Link>
      </div>
      <div className="float-right inline-block">
        <Link to="/new"></Link>
      </div>
    </div>
  )
}
