import { NavLink } from 'react-router-dom'
import Media from 'react-media';
import DeleteButton from '../Delete/DeleteButton';
import '../../index.css';
import LeftChevron from './LeftChevron';
import LeftArrow from './LeftArrow';
import EditButton from './EditButton';

export default function Navbar(props) {
  const { items, id, type, name } = props;

  return (
    <nav className="flex justify-between px-6 mt-11 h-11">
      <div className="object-left my-auto">
      <Media queries={{ iPad:"(min-width: 1024px)"}}>
        {matches => matches.iPad ? (
          <NavLink to="/">
            <LeftChevron name={name} />
          </NavLink>) : (
          <NavLink to="/">
            <LeftArrow />
          </NavLink>)
        }
      </Media>      
      </div>
      {type==="detail" ? 
        <div className="float-right inline-block p-2 flex my-auto">
          <EditButton type={type}/>
          <DeleteButton type={type} items={items} id={id} className="ml-4" />
        </div> : null}
    </nav>
  )
}