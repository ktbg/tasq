import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getListItems } from '../services';

export default function Edit() {
  const { id, title } = useParams();
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      try{
        setItems(getListItems());
      }catch(error){
        console.log(error);
      }
      fetchItems();
      console.log(items);
    }
  }, [id])
  
  return (
    <>
      <h3>{title}</h3>
      {/* <form onSubmit={props.handleSubmit}> */}
      <form>
        {items.map((item) => {
          return(
            <>
              <label>item: </label>
              <input
              type="text"
              value={item.fields.name}
              // onChange={(e) => setName(e.target.value)}
              />
              <br />
            </>
          )
        })}
          

      </form> 
    </>  
  )
}
