import FormInput from "./FormInput";
// import { useEffect } from "react";
import { Link } from "react-router-dom";

// current iteration of the form for post request only, put is postMVP
export default function Form(props) {
  // const [title, setTitle] = useState("");

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
        {!toggle ? <button>+</button> : null}
      </form>
      
      {!toggle ? <div></div> : 
      <form onSubmit={handleItemSubmit}> 
        <FormInput listItem={listItem} setListItem={setListItem}/> 
      </form>
      }
      <Link to={`/list/${titleId}/${title}`}>
       save list
      </Link>
    </>  
  )
}