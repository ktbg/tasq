import '../../index.css';

export default function FormInput(props) {
  const {
    listItem,
    setListItem,
    placeholder,
    autoFocus
  } = props;
  
  return (
    <>
      {/* <label>List Item</label> */}
      {/* <button>+</button>  */}
        <input 
          autoFocus={autoFocus}
          type="text"
          value={listItem}
          onChange={(e) => setListItem(e.target.value)}
          placeholder={placeholder}
          className="border border-tasqBorder rounded mt-2 font-light w-72 h-8 pl-2 text-xs justify-start"
        />
    </>
  )
}
