import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getListTitles } from '../services';


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
    // console.log(lists);
  }, [loading])

  // async function getItems(lists)
  if(loading) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <div className="mt-8">
        <h1 className="w-full text-left pl-6 font-medium text-2xl">My Lists</h1>
      </div>
      <div className="flex flex-col items-start ml-6 mt-8">
        {lists.map((list)=> (
          <Link to={`/list/${list.id}/${list.fields.name}`} >
            <div className="bg-tasqGrey h-19 w-80 mb-4 rounded px-4 py-4 flex justify-between" key={list.id}>
              <div>
                <h3 className="font-medium text-left w-66 py-3.75">{list.fields.name}</h3>
                <p className="text-xs text-left pt-1">XX items</p>
              </div>
              <svg className="mt-2"width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 18.5L15 12.5L9 6.5" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
          </Link>
        ))}
        <Link to="/new">
          <div className="text-darkPurple text-left w-80 h-10 rounded">
            <p className="inline-block pl-4 text-lg font-medium">+</p>
            <p className="inline-block pl-4">Add New List</p>
          </div>
        </Link>
      </div>
    </div>
  )
}
