import Form from './Form';
import { useState } from 'react';
import { createList } from '../services';
import { addListItem } from '../services'

export default function Create() {
  const [name, setName] = useState("");
  const [listItem, setListItem] = useState([]);
  const [titleId, setTitleId] = useState("");
  const [toggle, setToggle] = useState(false);
  const [inputs, setInputs] = useState(0);

//  on list name submit, post that to listTitle end point and return the id#
  const handleTitleSubmit = async (e) => {
    e.preventDefault();
    const fields = { name };
    try {
      setTitleId(await createList(fields));
      setName("");
      setToggle(true);
    } catch(error){
      console.log(error);
    }
  }
// attach the id# to each of the list items
  const handleItemSubmit = async (e) => {
    e.preventDefault();
    setInputs(inputs + 1);
    // userList.push(e.target.value); ---- may not need this but keeping for now
    const fields = {
      listTitles: [`${titleId}`],
      item: listItem,
    }
    try{
      await addListItem(fields);
      setListItem("");
    }catch(error){
      console.log(error);
    }
  }
// post list items and id# to listItems end point


  return (
    <div>
      <h5>Create a new list</h5>
      <Form 
        name={name}
        setName={setName}
        listItem={listItem}
        setListItem={setListItem}
        handleTitleSubmit={handleTitleSubmit}
        titleId={titleId}
        toggle={toggle}
        inputs={inputs}
        handleItemSubmit={handleItemSubmit}
        type={"Create"}
      />
    </div>
  )
}
