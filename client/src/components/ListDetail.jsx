import Navbar from './Nav/Navbar';
import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom';
import { getListItems, editItem } from "../services";
import '../index.css'

export default function ListDetail() {
  const [items, setItems] = useState([]);
  const { id, title } = useParams();
  const [loading, setLoading] = useState(true);
  const [checkedState, setCheckedState] = useState(0);

  const itemClass = "text-xl text-left pl-4"; 

  useEffect(()=> {
    const getItems = async () => {
      try{
        const viewListItems = await getListItems();                                                      // set axios to variable
        const filterView = viewListItems.filter((item) => item.fields.listTitles[0] === `${id}`);       // filter to get results and setItems
        setItems(filterView);
        setLoading(false);
      }catch(error) {
        console.log(error);
      }
    } 
    getItems();
  },[id, checkedState]);

// --------------------------- checkbox logic -------------------------------------
// airtable sends strings so booleans read as truthy, require numbers to trigger truthy or falsy

const handleCheckedItem = async (e, id) =>{
  console.log(e)
  let airtableState = null;
  if(e.target.defaultChecked === false){
    airtableState = 1;
  } else {
    airtableState = 0;
  } 
  const fields = {
      checked: airtableState
    }
  await editItem(id, fields);
  setCheckedState(airtableState);
}

if(loading) {
  return <div>Loading...</div>
}

  return (
    <>
      <Navbar 
        items={items} 
        id={id} type={"detail"} 
        name={"Lists"} 
      />
      <div className="w-375 mx-auto">
        <div className="mt-8 pl-1">
          <h1 className="w-full text-left pl-6 font-medium text-2xl">{title}</h1>
          <p className="text-sm text-left text-gray-600 pt-1 pl-6 font-light">{items.length} items</p>
        </div>
        <ul className="ml-6 mt-8">
          {items.map ((item) => {
            return (
              <div 
                key={item.id} 
                id={item.id}
                className="bg-tasqGrey hover:bg-tasqHover h-auto w-80 mb-2 rounded px-4 py-4 flex shadow"
              >
                <div className="my-auto">
                  <input 
                    type="checkbox" 
                    id={item.id}
                    className="detail-input"
                    defaultChecked={item.fields.checked}
                    onClick={(e)=> handleCheckedItem(e, item.id)}
                  />
                </div>
                <li htmlFor={item.id} className={itemClass} key={item?.id}>{item?.fields.item}</li>
              </div>
            )
          })}
        </ul>
        <Link to={`/list/${id}/${title}/edit`}>
          <div className="text-darkPurple purple-hover font-regular pl-6 mt-6 text-left w-80 h-10 rounded">
            <p className="inline-block pl-4 text-lg">+</p>
            <p className="inline-block pl-4">Add Items</p>
          </div>
        </Link>
      </div>
    </>
  )
}

