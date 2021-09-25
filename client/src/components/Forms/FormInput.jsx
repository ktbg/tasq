
import '../../index.css';


export default function FormInput(props) {

  const {
    listItem,
    // handleItemEdit,
    setNewListItem,
    setListItem,
    placeholder,
    autoFocus,
    id
  } = props;

  // const changeItem = (e, id) => {
  //   console.log(id)
  //   console.log(e)
  //   // if(id === undefined){
  //   //   setListItem(e.target.value);
  //   //   console.log(listItem);
  //   // } else {
  //   //   setNewListItem(e.target.value);
  //   // }
  //   !id ? console.log(`new item is ${e.target.value}`) : console.log(`edited item is ${e.target.value}`)
  // }  
  
  return (
    <>
      {!id ? (
        <input 
          autoFocus={autoFocus}
          type="text"
          value={listItem}
          onChange={(e)=>setListItem(e.target.value)}
          placeholder={placeholder}
          className="border border-tasqBorder rounded mt-2 font-light w-72 h-8 pl-2 text-xs justify-start"
        /> 
      ) : (  
        <input 
        autoFocus={autoFocus}
        type="text"
        value={listItem}
        onChange={(e)=>setNewListItem(e.target.value)}
        placeholder={placeholder}
        className="border border-tasqBorder rounded mt-2 font-light w-72 h-8 pl-2 text-xs justify-start"
      />
        )} 
    </>
  )
}
