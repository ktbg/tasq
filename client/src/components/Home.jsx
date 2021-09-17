import { useState, useEffect } from 'react';
import { getListNames } from '../services';


export default function Home() {
  const [lists, setLists] = useState([]);

  useEffect(() => {
    const getLists = async () => {
      try{
        setLists(await getListNames());
      }catch(error){
        console.log(error);
      }
    }
    getLists();
    console.log(lists);
  }, [])


  return (
    <div>
      <h1>{lists[0].fields.name}</h1>
      <ul>
      {lists[0].fields.items.map((item)=> (
        <li>{item}</li>
      ))}
      </ul>
    </div>
  )
}
