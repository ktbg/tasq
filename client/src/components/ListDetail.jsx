import Navbar from './Navbar';
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { getListItems } from "../services";

// pass id of list title as the prop
export default function ListDetail() {
  const [items, setItems] = useState([]);
  const { id, title } = useParams();
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
},[id]);

if(loading) {
  return <div>Loading...</div>
}

  return (
    <>
      <Navbar items={items} id={id} />
      <div className="mx-auto">
        <div className="mt-8">
          <h1 className="w-full text-left pl-6 font-medium text-2xl">{title}</h1>
          <p className="text-sm text-left text-gray-600 pt-1 pl-6">XX items</p>
        </div>
        <ul className="ml-6 mt-8">
          {items.map ((item) => {
            return (
              <div className="bg-tasqGrey h-auto w-80 mb-2 rounded px-4 py-4 flex">
                <div className="my-auto">
                  <input type="checkbox" className="w-6 h-6 checked:bg-gray-600 checked:border-transparent"/>
                </div>
                <li className="text-xl text-left pl-4"key={item?.id}>{item?.fields.item}</li>
              </div>
            )
          })}
        </ul>
        {/* add new task to list when edit functionality is there */}
        {/* <Link to="/new">
          <div className="text-darkPurple text-left w-80 h-10 rounded">
            <p className="inline-block pl-4 text-lg font-medium">+</p>
            <p className="inline-block pl-4">Add New List</p>
          </div>
        </Link> */}
      </div>
    </>
  )
}
