import '../../index.css';

export default function FormInput(props) {
  const {
    listItem,
    setListItem,
    placeholder,
    autoFocus,
    handleItemUpdate
  } = props;

  const testThisFunction = (e) => {
    console.log(e.target.value);
    console.log(listItem);
  }
  
  return (
    <>
      {/* <label>List Item</label> */}
      {/* <button>+</button>  */}
        <input 
          autoFocus={autoFocus}
          type="text"
          name={listItem}
          defaultValue={listItem}
          onChange={(e)=> setListItem(e.target.value)}
          onBlur={(e)=> setListItem(e.target.value)}
          handleItemUpdate={handleItemUpdate}
          placeholder={placeholder}
          className="border border-tasqBorder rounded mt-2 font-light w-72 h-8 pl-2 text-xs justify-start"
        />
    </>
  )
}
