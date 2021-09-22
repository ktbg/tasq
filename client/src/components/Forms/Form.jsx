import FormInput from "./FormInput";
import RedTrashCan from "../Delete/RedTrashCan";
import DeleteButton from "../Delete/DeleteButton";

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import '../../index.css';
import { getListItems } from "../../services";
// import { deleteItem } from "../../services";

// current iteration of the form for post request only, put is postMVP
export default function Form(props) {
  // const [title, setTitle] = useState("");
  const [items, setItems] = useState([]);
  // const [deleteItem, setDeleteItem] = useState("");

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
},[listItem, titleId]);

    // useEffect(()=> {
    //   // const handleItemDelete = () => {
    //     console.log(`item delete is ${deleteItem}`);
    //   console.log(`onMouseUpCapture ${deleteItem}`);
    //   setDeleteItem("");
    //   console.log(`deleteItem is now ${deleteItem}`);
    //   // await deleteItem(itemId);
    //   // }
    // },[deleteItem]);

  return (
    <div className="w-94 mx-6 mt-8">
      <div className="flex">
        <form onSubmit={handleTitleSubmit}>
          <label className="text-gray-400 uppercase text-xs block text-left mb-1">List Name</label>
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
        <label className="text-gray-400 uppercase text-xs block text-left">Items</label>

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
                // setDeleteItem={setDeleteItem}
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
          <svg width="80" height="42" viewBox="0 0 80 42" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect y="0.5" width="80" height="41" rx="8" fill="#9E8CD1"/>
            <path d="M28.3088 25.682C30.3528 25.682 31.7808 24.59 31.7808 22.798C31.7808 20.852 30.1428 20.348 28.5188 19.83C27.0908 19.382 26.5448 19.06 26.5448 18.304C26.5448 17.562 27.1468 17.086 28.0848 17.086C29.1768 17.086 29.7928 17.674 30.1428 18.458L31.5008 17.674C30.8848 16.372 29.6948 15.518 28.0848 15.518C26.4328 15.518 24.9348 16.54 24.9348 18.346C24.9348 20.194 26.4188 20.754 27.9448 21.216C29.4008 21.664 30.1708 21.958 30.1708 22.826C30.1708 23.54 29.6248 24.114 28.3508 24.114C27.0208 24.114 26.2648 23.456 25.9148 22.462L24.5288 23.274C25.0468 24.73 26.3768 25.682 28.3088 25.682ZM38.6403 18.5V19.494C38.1083 18.766 37.2823 18.318 36.1903 18.318C34.2863 18.318 32.7043 19.914 32.7043 22C32.7043 24.072 34.2863 25.682 36.1903 25.682C37.2823 25.682 38.1083 25.234 38.6403 24.492V25.5H40.1523V18.5H38.6403ZM36.4283 24.24C35.1683 24.24 34.2163 23.302 34.2163 22C34.2163 20.698 35.1683 19.76 36.4283 19.76C37.6883 19.76 38.6403 20.698 38.6403 22C38.6403 23.302 37.6883 24.24 36.4283 24.24ZM46.4957 18.5L44.5497 23.82L42.5897 18.5H40.9377L43.6677 25.5H45.4177L48.1477 18.5H46.4957ZM49.8567 22.644H55.4287C55.4567 22.448 55.4847 22.224 55.4847 22.014C55.4847 19.998 54.0567 18.318 51.9707 18.318C49.7727 18.318 48.2747 19.928 48.2747 22C48.2747 24.1 49.7727 25.682 52.0827 25.682C53.4547 25.682 54.5047 25.108 55.1487 24.156L53.9027 23.428C53.5667 23.918 52.9367 24.296 52.0967 24.296C50.9767 24.296 50.0947 23.736 49.8567 22.644ZM49.8427 21.412C50.0527 20.362 50.8227 19.69 51.9567 19.69C52.8667 19.69 53.7487 20.208 53.9587 21.412H49.8427Z" fill="white"/>
          </svg>
        </Link>
        <DeleteButton items={items} id={titleId} type={"create"} className={"text-tasqDelete font-medium"}/>
      </div>  
    </div>
  )
}
