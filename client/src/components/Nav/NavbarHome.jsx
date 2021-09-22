import { NavLink } from 'react-router-dom'
import Media from 'react-media';
import '../../index.css';
import CreateButton from './CreateButton';
import CreatePlus from './CreatePlus';
import BrandLogo from './BrandLogo';

export default function Navbar() {
  return (
    <div className="flex justify-between px-6 mt-11 h-11">
      <div className="object-left py-4">
        <NavLink to="/">
          <BrandLogo />
        </NavLink>
      </div>
      <div className="float-right inline-block p-2">
        <NavLink to="/new">
          <Media queries={{ iPad:"(min-width: 1024px)"}}>
              {matches =>
                matches.iPad ? (
                  <NavLink to="/new">
                    <CreateButton />
                  </NavLink>
                ) : (
                  <NavLink to="/">
                    <CreatePlus />
                  </NavLink>
                )
              }
          </Media>      
        </NavLink>
      </div>
    </div>
  )
}
