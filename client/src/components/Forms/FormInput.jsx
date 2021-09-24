
import '../../index.css';


export default function FormInput(props) {

  const {
    listItem,
    // handleItemEdit,
    changeItem,
    // setNewListItem,
    placeholder,
    autoFocus,
    id
  } = props;
  
  return (
    <>
        <input 
          autoFocus={autoFocus}
          type="text"
          value={listItem}
          onChange={(e)=>changeItem(e,id)}
          placeholder={placeholder}
          className="border border-tasqBorder rounded mt-2 font-light w-72 h-8 pl-2 text-xs justify-start"
        />
    </>
  )
}
