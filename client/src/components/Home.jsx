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
      {lists.map((list)=> (
        <Link to={`/list/${list.id}/${list.fields.name}`} >
          <div key={list.id}>
            <h3>{list.fields.name}</h3>
            {/* add onClick that grabs id of list name as prop to list detail */}
          </div>
        </Link>
      ))}
    </div>
  )
}
