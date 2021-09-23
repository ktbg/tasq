import { NavLink, useParams } from 'react-router-dom';

export default function EditIcon() {
  const { id, title } = useParams();

  return (
    <NavLink to={`/link/${id}/${title}/edit`}>
      <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11.1504 4H4.15039C3.61996 4 3.11125 4.21071 2.73618 4.58579C2.3611 4.96086 2.15039 5.46957 2.15039 6V20C2.15039 20.5304 2.3611 21.0391 2.73618 21.4142C3.11125 21.7893 3.61996 22 4.15039 22H18.1504C18.6808 22 19.1895 21.7893 19.5646 21.4142C19.9397 21.0391 20.1504 20.5304 20.1504 20V13" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M18.6504 2.49998C19.0482 2.10216 19.5878 1.87866 20.1504 1.87866C20.713 1.87866 21.2526 2.10216 21.6504 2.49998C22.0482 2.89781 22.2717 3.43737 22.2717 3.99998C22.2717 4.56259 22.0482 5.10216 21.6504 5.49998L12.1504 15L8.15039 16L9.15039 12L18.6504 2.49998Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </NavLink>
  )
}