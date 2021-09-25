import FormInput from "./FormInput";
import RedTrashCan from "../Delete/RedTrashCan";
import DeleteButton from "../Delete/DeleteButton";

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import '../../index.css';
import SaveButton from "./SaveButton";
import { deleteItem, getListItems, createList, addListItem } from "../../services";

export default function Form(props) {                       // current iteration of the form for post request only, put is postMVP
  const [items, setItems] = useState([]);
  const [toggleDelete, setToggleDelete] = useState(false);
  const [name, setName] = useState("");
  const [listItem, setListItem] = useState([]);
  const [titleId, setTitleId] = useState("");
  const [toggle, setToggle] = useState(false);
  const [title, setTitle] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);

  // const [inputs, setInputs] = useState(0);

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

    // const changeItem = (e) => {
    //   setListItem(e.target.value);
    // }  

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
          {!toggle ? <button className="mt-6 text-darkPurple font-light">+ Add New Item</button> : null}
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
                // setNewListItem={setNewListItem} 
                setListItem={setListItem}
                placeholder={null}
                autoFocus={false}
                // changeItem={changeItem}
              /> 
              <RedTrashCan 
                itemId={item.id} 
                className={"my-3 mx-auto"}
                handleItemDelete={handleItemDelete}
              />
          </div>
          ))}
          
          {/* ---------------------- new list input ---------------------------------- */}
          
          <div className="flex justify-between">
            <FormInput 
              listItem={listItem} 
              setListItem={setListItem} 
              // changeItem={changeItem}
              placeholder={"Enter List Item"}
              autoFocus={true}
            /> 
            <RedTrashCan className={"my-3 mx-auto"}/>
          </div>
          <div className="text-darkPurple text-left font-regular mt-5 hover:tasqPurpleHover">
            <p className="inline-block pl-4 text-lg">+</p>
            <p className="inline-block pl-4">Add List Item</p>
          </div>
        </form>
      </div>
      }
      
      <div className="flex justify-between mt-10">
        <Link to={`/list/${titleId}/${title}`}>
          <SaveButton />
        </Link>
        <DeleteButton items={items} id={titleId} type={"create"} className={"text-tasqDelete font-medium"}/>
      </div>  
    </div>
  )
}
