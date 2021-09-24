// import { useParams } from 'react-router-dom';
// import { useState } from 'react';
// import {editTitle, editItem} from '../../services'
// import Form from './Form';
import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getListItems, editTitle, deleteItem, addListItem, editItem } from '../../services';

import Navbar from '../Nav/Navbar';
import RedTrashCan from '../Delete/RedTrashCan';
import FormInput from './FormInput';
import SaveButton from './SaveButton';
import DeleteButton from '../Delete/DeleteButton';


export default function Edit() {
  const { id, title } = useParams();
  const [items, setItems] = useState([]);                               //initial array of items for this list
  const [name, setName] = useState(title);                              // used to indicate title of the list to manipulate
  const [listItem, setListItem] = useState("");                         //sets initial item populated with existing list items
  const [newListItem, setNewListItem] = useState("");                   // sets new list items added to the list
  const [toggleDelete, setToggleDelete] = useState(false);              //used to trigger re-render of the page on click of delete trash can


  // --------- get items for the list id you want to edit -----------


  useEffect(() => {                                                                         
    const fetchItems = async () => {
      try{
        const allListItems = await(getListItems());
        const filterListItems = allListItems.filter((item) => item.fields.listTitles[0] === `${id}`);
        setItems(filterListItems);
      }catch(error){
        console.log(error);
      }
    }
    fetchItems();
  }, [id, newListItem, listItem, toggleDelete])


// ------------------ EDIT TITLE --------------------------


  const handleTitleEdit = async (e) => {                                                    
    e.preventDefault();
    const fields = { name };
    try {
      const newNameData = await editTitle(id, fields);
      setName(newNameData.fields?.name)
    } catch(error){
      console.log(error);
    }
  }


  // ------------------ EDIT ITEM --------------------------
    

  const handleItemEdit = async (e, id) => {                                                     
    e.preventDefault();
    const fields = { 
      item: newListItem,
     };
    try {
      await editItem(id, fields);
      setListItem("");
    } catch(error){
      console.log(error);
    }
  }


  // ------------------ ADD NEW ITEM ------------------------------------


  const handleItemSubmit = async (e) => {
    e.preventDefault();
    const fields = {
      listTitles: [`${id}`],
      item: newListItem,
      checked: 0,
    }
    try{
      await addListItem(fields);
      setNewListItem("");
    }catch(error){
      console.log(error);
    }
  }


  // ----------------- DElETE ITEM WITH RED TRASHCAN -----------------


  const handleItemDelete = async (id) => {
    await deleteItem(id);
    setToggleDelete((prevState)=> !prevState);
  }

  const changeItem = (e, id) => {
    if (!id){
      setNewListItem(e.target.value);
    } else {
      setListItem(e.target.value);
    }
  }
  
  return (
    <>
      <Navbar 
        name={"Cancel"} 
        className={"text-darkPurple text-sm"}
        id={id}
        title={title}
      />

      {/* -------------------- render and edit existing title ------------------------------------- */}

      <div className="w-375 mx-auto">
        <div className="w-375 mx-auto">
          <form onBlur={handleTitleEdit}> 
            <label className="text-gray-400 uppercase text-xs block text-left mb-1 pl-1">List Name</label>
              <input 
                disabled={false}
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="border border-tasqBorder rounded h-8 w-80 content-start font-light p-4"
              /> 
          </form>
        </div>

        {/* -------------------- render and edit existing list items ------------------------------- */}
        
        <div className="mt-8">
          <form onBlur={handleItemEdit}> 
            <label className="text-gray-400 uppercase text-xs block text-left pl-1">Items</label>
              {items.map((item) => (
                <div key={item.id} className="flex justify-between">
                  <FormInput
                    id={item.id} 
                    listItem={item.fields?.item} 
                    // handleItemEdit={handleItemEdit}
                    placeholder={null}
                    autoFocus={false}
                    // setNewListItem={setListItem}
                    changeItem={changeItem}
                  /> 
                  <RedTrashCan 
                    itemId={item.id} 
                    className={"my-3 mx-auto"}
                    handleItemDelete={handleItemDelete}
                  />
              </div>
              ))} 
          </form>
            {/* ---------------------- new list input ---------------------------------- */}
          <form onSubmit={handleItemSubmit}>
            <div className="flex justify-between">
              <FormInput 
                listItem={newListItem}
                // setNewListItem={setNewListItem} 
                changeItem={changeItem}
                placeholder={"Enter List Item"}
                autoFocus={true}
              /> 
              <RedTrashCan 
                className={"my-3 mx-auto"}
                handleItemDelete={handleItemDelete} />
            </div>
            <button className="mt-6 text-darkPurple font-light justify-start">+ Add New Item</button>
          </form>
        </div> 

        <div className="flex justify-between mt-8">
        <Link to="/">
          <SaveButton />
        </Link>
          <DeleteButton items={items} id={id} type={"create"} className={"text-tasqDelete font-medium"}/>
      </div> 
      </div> 
    </> 
  )
}
