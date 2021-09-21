import FormInput from "./FormInput";
// import { useEffect } from "react";
import { Link } from "react-router-dom";
import '../index.css';
import RedTrashCan from "./Delete/RedTrashCan";

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
    <div className="md:container mx-6 mt-8">
      <div className="flex">
        <form onSubmit={handleTitleSubmit}>
          <label className="text-gray-400 uppercase text-xs block text-left mb-1">List Name</label>
          <input 
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border border-tasqBorder rounded h-8 w-80 content-start"
          /> 
          {!toggle ? <button>+</button> : null}
        </form>
      </div>
      {!toggle ? <div></div> : 
      <div className="mt-8">
        <form onSubmit={handleItemSubmit}> 
        <label className="text-gray-400 uppercase text-xs block text-left">Items</label>
          <div className="flex">
            <FormInput listItem={listItem} setListItem={setListItem}/> 
            <RedTrashCan className={"my-3 mx-auto"}/>
          </div>
        </form>
      </div>
      }
      <div className="mt-6 text-darkPurple">+ Add New Item</div>
      <div className="flex justify-between mt-8">
        <Link to={`/list/${titleId}/${title}`}>
        save list
        </Link>
        <Link to="/" className="text-tasqDelete my-auto">Delete List</Link>
      </div>  
    </div>
  )
}
