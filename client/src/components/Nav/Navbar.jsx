import { NavLink, useHistory } from 'react-router-dom'
import Media from 'react-media';
import DeleteButton from '../Delete/DeleteButton';
import '../../index.css';
import LeftChevron from './LeftChevron';
import LeftArrow from './LeftArrow';

export default function Navbar(props) {
  const { items, id, type, name } = props;
  const history = useHistory();

  return (
    <nav className="flex justify-between px-6 mt-11 h-11">
      <div className="object-left my-auto">
      <Media queries={{ iPad:"(min-width: 1024px)"}}>
            {matches =>
              matches.iPad ? (
                <button onClick={() => history.goBack()}>
                  <LeftChevron name={name} />
                </button>
              ) : (
                <NavLink to="/">
                  <LeftArrow />
                </NavLink>
              )
            }
      </Media>      
      </div>
      {type==="detail" ? 
        <div className="float-right inline-block p-2 flex my-auto">
          <DeleteButton items={items} id={id} />
        </div> : null}
    </nav>
  )
}