
export default function FormInput(props) {
  const {
    listItem,
    setListItem,
  } = props;
  
  return (
    <>
      {/* <label>List Item</label> */}
      {/* <button>+</button>  */}
        <input  
          type="text"
          value={listItem}
          onChange={(e) => setListItem(e.target.value)}
        />
    </>
  )
}
