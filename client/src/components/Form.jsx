import React from 'react'

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
        <label>List Item</label>
        <input  
          type="text"
          value={listItem}
          onChange={(e) => setListItem(e.target.value)}
        />
        <div>{titleId}</div>
        <button>{type}</button>
      </form>
      }
    </>  
  )
}
