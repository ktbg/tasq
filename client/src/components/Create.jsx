import Form from './Form';
import { useState } from 'react';
import { createList } from '../services';

export default function Create() {
  const [name, setName] = useState("");
  const [listItem, setListItem] = useState([]);
  const [titleId, setTitleId] = useState("");

//  on list name submit, post that to listTitle end point and return the id#
  const handleTitleSubmit = async (e) => {
    e.preventDefault();
    const fields = { name };
    try {
      await createList(fields);
    } catch(error){
      console.log(error);
    }
  }

// attach the id# to each of the list items
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
        setTitleId={setTitleId}
        // handleListItemSubmit={handleListItemSubmit}
        type={"Create"}
      />
    </div>
  )
}
