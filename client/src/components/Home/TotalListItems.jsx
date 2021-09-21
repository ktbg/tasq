import '../../index.css';
import { getListItems } from '../../services';
import { useState, useEffect } from 'react';

export default function TotalListItems(props) {
  const { id, className} = props;
  const [items, setItems] = useState([]);

  // async function getItems(lists)
  useEffect(()=> {
    const getItems = async () => {
      try{
        // set axios to variable
        const viewListItems = await getListItems();
        // filter to get results and setItems
        const filterView = viewListItems.filter((item) => item.fields.listTitles[0] === `${id}`);
        setItems(filterView);
      }catch(error) {
        console.log(error);
      }
    } 
    getItems();
  },[id]);



  return (
    <div>
      <p className={className}>{items.length} items</p>
    </div>
  )
}
