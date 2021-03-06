import { NavLink, useParams } from 'react-router-dom';
import { Fragment } from 'react'
import Media from 'react-media';
import '../../index.css'

import EditIcon from './EditIcon';

export default function EditButton(props) {
  const { id, title } = useParams();
  const { type } = props;

  return (
    <div>
      {type==="detail" ? (
        <Media queries={{ 
          iPad:"(min-width: 1024px)",
          mobile:"(max-width: 1023px)",
          }}>
              {matches =>(
                <Fragment>
                  {matches.iPad && 
                    <NavLink to={`/list/${id}/${title}/edit`}>
                      <div className="group">
                        <svg width="49" height="34" viewBox="0 0 49 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect x="0.75" y="1.25" width="47.5" height="31.5" rx="7.25" fill="white"/>
                          <path d="M14.59 19.96V17.314H18.51V15.788H14.59V13.24H18.86V11.7H12.98V21.5H18.93V19.96H14.59ZM25.5481 11.7V15.494C25.0161 14.766 24.1901 14.318 23.0981 14.318C21.1941 14.318 19.6121 15.914 19.6121 18C19.6121 20.072 21.1941 21.682 23.0981 21.682C24.1901 21.682 25.0161 21.234 25.5481 20.492V21.5H27.0601V11.7H25.5481ZM23.3361 20.24C22.0761 20.24 21.1241 19.302 21.1241 18C21.1241 16.698 22.0761 15.76 23.3361 15.76C24.5961 15.76 25.5481 16.698 25.5481 18C25.5481 19.302 24.5961 20.24 23.3361 20.24ZM29.4135 13.45C29.9455 13.45 30.3795 13.002 30.3795 12.484C30.3795 11.952 29.9455 11.518 29.4135 11.518C28.8815 11.518 28.4475 11.952 28.4475 12.484C28.4475 13.002 28.8815 13.45 29.4135 13.45ZM28.6575 21.5H30.1695V14.5H28.6575V21.5ZM35.666 15.956V14.5H33.93V12.54L32.418 12.988V14.5H31.13V15.956H32.418V19.316C32.418 21.136 33.342 21.78 35.666 21.5V20.142C34.518 20.198 33.93 20.212 33.93 19.316V15.956H35.666Z" fill="#9E8CD1"/>
                          <rect x="0.75" y="1.25" width="47.5" height="31.5" rx="7.25" stroke="#9E8CD1" strokeWidth="1.5"/>
                        </svg>
                      </div>
                    </NavLink>
                  }
                  {matches.mobile && 
                    <NavLink to={`/list/${id}/${title}/edit`}>
                      <EditIcon />
                    </NavLink>
                  } 
                </Fragment>
              )}
        </Media>
      ): null}
    </div>
  )
}
