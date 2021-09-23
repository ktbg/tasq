import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getListItems } from '../services';

export default function Edit() {
  const { id, title } = useParams();
  const [items, setItems] = useState([]);
  const [name, setName] = useState("");


  useEffect(() => {
    const fetchItems = async () => {
      try{
        const allListItems = await(getListItems());
        const filterListItems = allListItems.filter((item) => item.fields.listTitles[0] === `${id}`);
        setItems(filterListItems);
        setLoading(false);
      }catch(error){
        console.log(error);
      }
    }
    fetchItems();
    console.log(items);
  }, [id])

  // ------------------ title change submit --------------------------
  //  on list name submit, post that to listTitle end point and return the id#
  const handleTitleSubmit = async (e) => {
    e.preventDefault();
    const fields = { name };
    try {
      await editTitle(id, fields);
    } catch(error){
      console.log(error);
    }
  }

  // ------------------ item change ---------------------------------
  // attach the id# to each of the list items
  const handleItemSubmit = async (e) => {
    e.preventDefault();
    const fields = {
      listTitles: [`${id}`],
      item: listItem,
    }
    try{
      await addListItem(fields);
      setListItem("");
    }catch(error){
      console.log(error);
    }
  }
  
  return (
    <div>
      <Form 
        
      />
    </div>  
  )
}
