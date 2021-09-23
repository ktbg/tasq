import Navbar from './Nav/Navbar';
import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom';
import { getListItems, editItem } from "../services";
import '../index.css'

// pass id of list title as the prop
export default function ListDetail() {
  const [items, setItems] = useState([]);
  const { id, title } = useParams();
  const [loading, setLoading] = useState(true);
  // const [itemClass, setItemClass] = useState("");
  const [checkedState, setCheckedState] = useState(0);
  // const [itemsCompleted, setItemsCompleted] = useState(0);
  
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
  },[id]);
  // console.log(items);

// --------------------------- checkbox logic -------------------------------------
// airtable restrictions require numbers to trigger truthy or falsy

const handleCheckedItem = async (e, id) =>{
  const currentCheckedState = checkedState;
  if(currentCheckedState === 0){
    setCheckedState(1);
  } else {
    setCheckedState(0);  
  } 
  const fields = {
      checked: checkedState,
    }
  const updatedArr = await editItem(id, fields);
  console.log(updatedArr);

}

// -------------------------- counter for progress donut -------------------------
// const progress = (arr)=> {
//   arr.map((item) => {
//     return item.fields.checked === 1;
//   })
// }

const handleClick = (e) => {
  console.log(e);
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
          {items.map ((item, index) => {
            return (
              <div key={index} className="bg-tasqGrey h-auto w-80 mb-2 rounded px-4 py-4 flex shadow" onClick={(e)=>handleClick(e)}>
                <div className="my-auto">
                  <input 
                    type="checkbox" 
                    id={item.id}
                    className={'detail-input'}
                    checked={item.fields.checked}
                    onChange={(e)=> handleCheckedItem(e, item.id)}
                  />
                </div>
                <li htmlFor={item.id} className={`text-xl text-left pl-4`} key={item?.id}>{item?.fields.item}</li>
              </div>
            )
          })}
        </ul>
        {/* add new task to list when edit functionality is there */}
        <Link to="/new">
          <div className="text-darkPurple font-medium pl-6 mt-6 text-left w-80 h-10 rounded">
            <p className="inline-block pl-4 text-lg">+</p>
            <p className="inline-block pl-4">Add New List</p>
          </div>
        </Link>
      </div>
    </>
  )
}

