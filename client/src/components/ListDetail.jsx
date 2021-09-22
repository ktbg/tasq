import Navbar from './Nav/Navbar';
import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom';
import { getListItems } from "../services";

// pass id of list title as the prop
export default function ListDetail() {
  const [items, setItems] = useState([]);
  const { id, title } = useParams();
  const [loading, setLoading] = useState(true);
  // const [isChecked, setIsChecked] = useState(false);

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

// --------------------------- checkbox logic -------------------------------------
// initial state set to unchecked
// if an item is checked
//      1. change style to strike through and lighten font color
//      2. update api status to checked (for future to move or hide)
//      3. add +1 to completed items for % complete donut, but to keep total list items



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
              <div key={item.id} className="bg-tasqGrey h-auto w-80 mb-2 rounded px-4 py-4 flex">
                <div className="my-auto">
                  <input 
                    type="checkbox" 
                    className="w-6 h-6 checked:bg-darkPurple checked:border-transparent"
                    // onClick={handleCheckbox}
                    // checkbox={}
                  />
                </div>
                <li className="text-xl text-left pl-4"key={item?.id}>{item?.fields.item}</li>
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

// setToggle((prevToggle))