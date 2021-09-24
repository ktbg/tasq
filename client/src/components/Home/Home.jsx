import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getListTitles } from '../../services';
import NavbarHome from '../Nav/NavbarHome';
import TotalListItems from './TotalListItems';


export default function Home() {
  const [lists, setLists] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getLists = async () => {
      try{
        setLists(await getListTitles());
        setLoading(false);
      }catch(error){
        console.log(error);
      }
    }
    getLists();
  }, [loading])

  if(loading) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <NavbarHome />
      <div className="w-375 mx-auto flex flex-col">
        <div className="mt-8">
          <h1 className="w-full text-left pl-6 font-medium text-2xl">My Lists</h1>
        </div>
        <div className="flex flex-col items-start ml-6 mt-8">

          {/* ------------------------------ lists ---------------------------------- */}
          {lists.map((list)=> (
            <Link to={`/list/${list.id}/${list.fields.name}`} key={list.id}>
              <div className="bg-tasqGrey hover:bg-tasqHover shadow h-19 w-80 mb-4 rounded px-4 py-4 flex justify-between" key={list.id}>
                <div>
                  <h3 className="font-medium text-left w-66 py-3.75">{list.fields.name}</h3>
                  <TotalListItems id={list.id} className={"text-xs text-left pt-1 font-light"} />
                </div>
                <svg className="mt-2"width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 18.5L15 12.5L9 6.5" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </Link>
          ))}
          
          <Link to="/new">
            <div className="text-darkPurple text-left font-medium w-80 h-10 rounded">
              <p className="inline-block pl-4 text-lg">+</p>
              <p className="inline-block pl-4">Add New List</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}
