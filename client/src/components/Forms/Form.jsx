import FormInput from "./FormInput";
import RedTrashCan from "../Delete/RedTrashCan";
import DeleteButton from "../Delete/DeleteButton";

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import '../../index.css';
import { getListItems } from "../../services";
import SaveButton from "./SaveButton";
import { deleteItem } from "../../services";

// current iteration of the form for post request only, put is postMVP
export default function Form(props) {
  // const [title, setTitle] = useState("");
  const [items, setItems] = useState([]);
  const [toggleDelete, setToggleDelete] = useState(false);

  const {
    name,
    setName,
    listItem,
    setListItem,
    handleTitleSubmit,
    handleItemSubmit,
    titleId,
    toggle,
    title,
    isDisabled
  } = props;

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

  // ================================================
  // handle delete of single items via red trash can
  // ================================================

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
          {!toggle ? <button className="mt-6 text-darkPurple font-light">+ Add New Item</button> : null}
        </form>
      </div>

      {/* --------------------------list item inputs---------------------------------- */}
      {!toggle ? <div></div> : 
      <div className="mt-8">
        <form onSubmit={handleItemSubmit}> 
        <label className="text-gray-400 uppercase text-xs block text-left pl-1">Items</label>

          {/* map over list items to render them in fields */}
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
              placeholder={"Enter List Item"}
              autoFocus={true}
            /> 
            <RedTrashCan className={"my-3 mx-auto"}/>
          </div>
          <button className="mt-6 text-darkPurple font-light justify-start">+ Add New Item</button>
        </form>
      </div>
      }
      
      <div className="flex justify-between mt-8">
        <Link to={`/list/${titleId}/${title}`}>
          <SaveButton />
        </Link>
        <DeleteButton items={items} id={titleId} type={"create"} className={"text-tasqDelete font-medium"}/>
      </div>  
    </div>
  )
}
