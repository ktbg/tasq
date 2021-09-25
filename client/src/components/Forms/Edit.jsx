// import { useParams } from 'react-router-dom';
// import { useState } from 'react';
// import {editTitle, editItem} from '../../services'
// import Form from './Form';
// import FormInput from './FormInput';

import { useParams, Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { getListItems, editTitle, deleteItem, addListItem, editItem } from '../../services';

import Navbar from '../Nav/Navbar';
import RedTrashCan from '../Delete/RedTrashCan';
import SaveButton from './SaveButton';
import DeleteButton from '../Delete/DeleteButton';


export default function Edit() {
  const { id, title } = useParams();
  const [items, setItems] = useState([]);                               //initial array of items for this list
  const [name, setName] = useState(title);                              // used to indicate title of the list to manipulate
  const [listItem, setListItem] = useState("");                         //sets initial item populated with existing list items                  
  const [toggleDelete, setToggleDelete] = useState(false);              //used to trigger re-render of the page on click of delete trash can
  const editField = useRef("");                                         //used to populate edit form with default values while being able to capture edited values


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
  }, [id, listItem, toggleDelete])


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
    

  const handleItemEdit = async (e) => {                                                     
    e.preventDefault();
    let editValue = e.target.value;
    console.log(editValue);
    const itemId = e.target.id;
    const fields = { 
      item: editValue,
     };
    try {
      await editItem(itemId, fields);
      editValue = "";
    } catch(error){
      console.log(error);
    }
  }


  // ------------------ ADD NEW ITEM ------------------------------------


  const handleItemSubmit = async (e) => {
    e.preventDefault();
    const fields = {
      listTitles: [`${id}`],
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


  // ----------------- DElETE ITEM WITH RED TRASHCAN -----------------


  const handleItemDelete = async (id) => {
    await deleteItem(id);
    setToggleDelete((prevState)=> !prevState);
  }

  // const changeItem = (e, id) => {
  //   if (!id){
  //     setNewListItem(e.target.value);
  //   } else {
  //     setListItem(e.target.value);
  //   }
  // }
  
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
                  {/* try simple input repeated */}
                  {/* <FormInput
                    id={item.id} 
                    listItem={item.fields?.item} 
                    // handleItemEdit={handleItemEdit}
                    placeholder={null}
                    autoFocus={false}
                    setNewListItem={setListItem}
                    
                  />  */}
                  <input 
                    id={item.id}
                    type="text"
                    defaultValue={item.fields?.item}
                    // onChange={(e)=>{
                    //   console.log(e.target.value)
                    //   setNewListItem(e.target.value)
                    // }}
                    ref={editField}
                    placeholder={null}
                    className="border border-tasqBorder rounded mt-2 font-light w-72 h-8 pl-2 text-xs justify-start"
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
              {/* <FormInput 
                listItem=""
                setListItem={setListItem}
                // changeItem={changeItem}
                placeholder={"Enter List Item"}
                autoFocus={true}
              /> */}
              <input 
                autoFocus={true}
                type="text"
                value={listItem}
                onChange={(e)=>{
                  console.log(e.target.value);
                  setListItem(e.target.value)
                }}
                placeholder={"Enter List Item"}
                className="border border-tasqBorder rounded mt-2 font-light w-72 h-8 pl-2 text-xs justify-start"
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
