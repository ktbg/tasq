import DeleteButton from "./DeleteButton"
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { getListItems } from "../services";

// pass id of list title as the prop
export default function ListDetail() {
  // for testing, id is for Grocery List
  // const id = `recNTA3BwpU8YKHp5`;
  const [items, setItems] = useState([]);

  const { id } = useParams();

  useEffect(()=> {
    const getItems = async () => {
      try{
        setItems(await getListItems(id));
        console.log(items);
      }catch(error) {
        console.log(error);
      }
  } 
  getItems();
},[id]);

function createList (items){
  items.map((item) => {
    return item.fields.listTitles === id;
  })
}

  return (
    <div>
      <h3>List Name</h3>
      <ul>
        {items.map((item) => {
          return (
            <li key={item.id}>{item.fields.item}</li>
          )
        })}
      </ul>
      <DeleteButton />
    </div>
  )
}
