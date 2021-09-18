import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getListTitles } from '../services';


export default function Home() {
  const [lists, setLists] = useState([]);

  useEffect(() => {
    const getLists = async () => {
      try{
        setLists(await getListTitles());
      }catch(error){
        console.log(error);
      }
    }
    getLists();
    console.log(lists);
  }, [])

  // async function getItems(lists)

  return (
    <div>
      {lists.map((list)=> (
        <Link to={`/list/${list.id}`} target="_blank" rel="noopener noreferrer">
          <div key={list.id}>
            <h3>{list.fields.name}</h3>
            {/* add onClick that grabs id of list name as prop to list detail */}
          </div>
        </Link>
      ))}
    </div>
  )
}
