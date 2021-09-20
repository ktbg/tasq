import FormInput from "./FormInput";
import { useEffect } from "react";

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
      </form>
      
      {!toggle ? <div></div> : 
      // <form>
      <form onSubmit={handleItemSubmit}> 
        {/* {inputs.map((input) => { */}
          {/* return(
            <> */}
              <FormInput listItem={listItem} setListItem={setListItem}/>
              <div>{titleId}</div> 
            {/* </>  
          )   */}
        {/* })} */}
        <button>{type}</button>
      </form>
      }
    </>  
  )
}
