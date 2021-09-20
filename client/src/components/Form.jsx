import FormInput from "./FormInput";
import { useEffect } from "react";
import { Link } from "react-router-dom";

// current iteration of the form for post request only, put is postMVP
export default function Form(props) {

  const {
    name,
    setName,
    listItem,
    setListItem,
    handleTitleSubmit,
    handleItemSubmit,
    titleId,
    toggle,
    inputs,
    type,
  } = props;

  return (
    <>
      <form onSubmit={handleTitleSubmit}>
        <label>List Title</label>
        <input 
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        /> 
        <button>+</button> 
      </form>
      
      {!toggle ? <div></div> : 
      // <form>
      <form onSubmit={handleItemSubmit}> 
        <FormInput listItem={listItem} setListItem={setListItem}/> 
      </form>
      }
      <Link to={`./link/${titleId}`}>
       <button>save list</button>
      </Link>
    </>  
  )
}
