import DeleteButton from "./DeleteButton"
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { getListItems } from "../services";

// pass id of list title as the prop
export default function ListDetail() {
  const [items, setItems] = useState([]);
  const { id } = useParams();
  const [loading, setLoading] = useState(true);

  useEffect(()=> {
    const getItems = async () => {
      try{
        // set axios to variable
        const viewListItems = await getListItems();
        // filter to get results and setItems
        const filterView = viewListItems.filter((item) => item.fields.listTitles[0] === `${id}`);
        setItems(filterView);
        setLoading(false);
      }catch(error) {
        console.log(error);
      }
  } 
  getItems();
},[]);

if(loading) {
  return <div>Loading...</div>
}

  return (
    <div>
      <h3>List Name</h3>
      <ul>
        {items.map ((item) => 
          (<li key={item?.id}>{item?.fields.item}</li>)
        )}
      </ul>
      <DeleteButton />
    </div>
  )
}
