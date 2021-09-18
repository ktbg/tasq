import React from 'react'

// current iteration of the form for post request only, put is postMVP
export default function Form(props) {

  const {
    name,
    setName,
    listItem,
    setListItem,
    handleTitleSubmit,
    titleId,
    setTitleId,
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
      {/* <form onSubmit={handleItemSubmit}> */}
      <form>
        <label>List Item</label>
        <input  
          type="text"
          value={listItem}
          onChange={(e) => setListItem(e.target.value)}
        />
        <button>{type}</button>
      </form>
    </>  
  )
}
