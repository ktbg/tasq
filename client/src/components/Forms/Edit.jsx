import { useParams, useHistory, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getListItems, editTitle, deleteItem, addListItem, editItem } from '../../services';
import Navbar from '../Nav/Navbar';
import RedTrashCan from '../Delete/RedTrashCan';
import FormInput from './FormInput';
import SaveButton from './SaveButton';
import DeleteButton from '../Delete/DeleteButton';
// import Form from './Form';

export default function Edit() {
  const { id, title } = useParams();
  const [items, setItems] = useState([]);
  const [name, setName] = useState("");
  const [listItem, setListItem] = useState("");
  const [toggleDelete, setToggleDelete] = useState(false);
  const history = useHistory();

  // --------- get items for the list id you want to edit -----------
  useEffect(() => {
    const fetchItems = async () => {
      try{
        const allListItems = await(getListItems());
        const filterListItems = allListItems.filter((item) => item.fields.listTitles[0] === `${id}`);
        // this returns all of the items in a specific list
        // console.log(filterListItems);
        setItems(filterListItems);
        // setLoading(false);
      }catch(error){
        console.log(error);
      }
    }
    fetchItems();
    // console.log(items);
  }, [id, listItem, toggleDelete])

  // ------------------ EDIT TITLE --------------------------
  //  on list name submit, post that to listTitle end point and return the id#
  const handleTitleEdit = async (e) => {
    e.preventDefault();
    const fields = { name };
    try {
      await editTitle(id, fields);
    } catch(error){
      console.log(error);
    }
  }

    // ------------------ EDIT TITLE --------------------------
  //  on list name submit, post that to listTitle end point and return the id#
  const handleItemEdit = async (e) => {
    e.preventDefault();
    const fields = { name };
    try {
      await editItem(id, fields);
    } catch(error){
      console.log(error);
    }
  }

  const testItemEdit = (e) => {
    console.log(e);
  }
  const updateItems = (e) => {
    if(e.target.id === undefined){
      handleItemSubmit(e);
    } else {
      handleItemEdit(e);
    }
  }
  // ------------------ ADD ITEM ------------------------------------
  // attach the id# to each of the list items
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
    // console.log(`this is handle delete ${id}`);
    await deleteItem(id);
    setToggleDelete((prevState)=> !prevState);
  }
  
  return (
    <>
      <Navbar 
        name={"Cancel"} 
        className={"text-darkPurple text-sm"}
        id={id}
        title={title}
      />
      <div className="w-375 mx-auto">
        <div className="w-375 mx-auto">
          <form onBlur={handleTitleEdit}>
            <label className="text-gray-400 uppercase text-xs block text-left mb-1 pl-1">List Name</label>
              <input 
                disabled={false}
                type="text"
                defaultValue={title}
                onChange={(e) => setName(e.target.value)}
                className="border border-tasqBorder rounded h-8 w-80 content-start font-light p-4"
              /> 
          </form>
        </div>
        <div className="mt-8">
          <form onSubmit={handleItemEdit}> 
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
                listItem="" 
                setListItem={setListItem} 
                placeholder={"Enter List Item"}
                autoFocus={true}
              /> 
              <RedTrashCan 
                className={"my-3 mx-auto"}
                handleItemDelete={handleItemDelete}
              />
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

// to={`/list/${id}/${title}`}
