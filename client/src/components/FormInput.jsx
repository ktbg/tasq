
export default function FormInput(props) {
  const {
    listItem,
    setListItem,
  } = props;
  
  return (
    <>
      <label>List Item</label>
        <input  
          type="text"
          value={listItem}
          onChange={(e) => setListItem(e.target.value)}
        />
    </>
  )
}
