import FormInput from "./FormInput";
import RedTrashCan from "../Delete/RedTrashCan";
import DeleteButton from "../Delete/DeleteButton";

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import '../../index.css';
import SaveButton from "./SaveButton";
import { deleteItem, getListItems, createList, addListItem } from "../../services";

export default function Form(props) {                     
  const [items, setItems] = useState([]);
  const [toggleDelete, setToggleDelete] = useState(false);
  const [name, setName] = useState("");
  const [listItem, setListItem] = useState([]);
  const [titleId, setTitleId] = useState("");
  const [toggle, setToggle] = useState(false);
  const [title, setTitle] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);


  // =============================================== 
  // get items for a specific listTitle ID 
  // ===============================================

  useEffect(()=> {
    const getItems = async () => {
      try{
        const viewListItems = await getListItems(); // set axios to variable
        const filterView = viewListItems.filter((item) => item.fields.listTitles[0] === `${titleId}`);  // filter to get results and setItems
        setItems(filterView);
      }catch(error) {
        console.log(error);
      }
    } 
    getItems();
  },[listItem, titleId, toggleDelete]);


  const handleTitleSubmit = async (e) => {
    e.preventDefault();
    const fields = { name };
    try {
      setTitleId(await createList(fields));
      setTitle(name);
      setIsDisabled(true);
      setToggle(true);
    } catch(error){
      console.log(error);
    }
  }


  const handleItemSubmit = async (e) => {
    e.preventDefault();
    const fields = {
      listTitles: [`${titleId}`],
      item: listItem,
      checked: 0,
    }
    try{
      await addListItem(fields);
      setListItem("");
    }catch(error){
      console.log(error);
    }
  }


    const handleItemDelete = async (id) => {
      console.log(`this is handle delete ${id}`);
      await deleteItem(id);
      setToggleDelete((prevState)=> !prevState);
    }

  return (
    <div className="w-94 mx-6 mt-8">
      <div className="flex">
        <form onSubmit={handleTitleSubmit}>
          <label className="text-gray-400 uppercase text-xs block text-left mb-1 pl-1">List Name</label>
          <input 
            disabled={isDisabled}
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border border-tasqBorder rounded h-8 w-80 content-start font-light p-4"
          /> 
          {!toggle ? (
            <div className="flex justify-items-start">
              <button className="text-darkPurple hover:text-tasqPurpleHover text-left content-start font-light mt-5 ">
                <span className="px-4 text-lg">+</span>
                Add New Item
              </button>
            </div>
          ) : null}
        </form>
      </div>

      {/* -------------------list item inputs, render items after new item submitted ---------------- */}

      {!toggle ? <div></div> : 
      <div className="mt-8">
        <form onSubmit={handleItemSubmit}> 
        <label className="text-gray-400 uppercase text-xs block text-left pl-1">Items</label>
          {items.map((item) => (
            <div key={item.id} className="flex justify-between">
              <FormInput 
                listItem={item.fields?.item} 
                setListItem={setListItem}
                placeholder={null}
                autoFocus={false}
              /> 
              <RedTrashCan 
                itemId={item.id} 
                className={"my-3 mx-auto hover:tasqDeleteRed"}
                handleItemDelete={handleItemDelete}
              />
          </div>
          ))}
          
          {/* ---------------------- new list input ---------------------------------- */}
          
          <div className="flex justify-between">
            <FormInput 
              listItem={listItem} 
              setListItem={setListItem} 
              placeholder={"Enter List Item"}
              autoFocus={true}
            /> 
            <RedTrashCan className={"my-3 mx-auto hover:tasqDeleteRed"}/>
          </div>
          <div className="flex justify-items-start">
            <button className="text-darkPurple hover:text-tasqPurpleHover text-left content-start font-light mt-5 ">
              <span className="px-4 text-lg">+</span>
              Add List Item
            </button>
          </div>
        </form>
      </div>
      }
      
      <div className="flex justify-between mt-10">
        <Link to={`/list/${titleId}/${title}`}>
          <SaveButton />
        </Link>
        <DeleteButton items={items} id={titleId} type={"create"} className={"text-tasqDelete hover:text-tasqDeleteHover font-medium"}/>
      </div>  
    </div>
  )
}
