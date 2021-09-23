import axios from 'axios'

const airtableBase = process.env.REACT_APP_AIRTABLE_BASE;
const airtableKey = process.env.REACT_APP_AIRTABLE_KEY;

const titleURL = `https://api.airtable.com/v0/${airtableBase}/listTitles`
const itemURL = `https://api.airtable.com/v0/${airtableBase}/listItems`
const config = {
  headers: {
    Authorization: `Bearer ${airtableKey}`,
  }
}

// ------------------- for Home.jsx --------------------------
export const getListTitles = async () => {
  const res = await axios.get(titleURL, config);
  return res.data.records;
}

// ------------------- for ListDetails.jsx -------------------
export const getListItems = async () => {
  const res = await axios.get(itemURL, config);
  // console.log(res.data.records);
  return res.data.records;
}

// ------------------- for Create.jsx ------------------------
export const createList = async (fields) => {
  const res = await axios.post(titleURL, { fields }, config);
  // console.log("new list Title created");
  // console.log(res.data);
  return(res.data.id);
}

export const addListItem = async (fields) => {
  const res = await axios.post(itemURL, { fields }, config);
  // console.log(res.data);
  return res.data;
}

// ------------------- for DeleteButton.jsx -----------------
export const deleteList = async(id) => {
  const res = await axios.delete(`${titleURL}/${id}`, config);
  return res.data;
}

// delete items from listItems table
export const deleteItem = async(id) => {
  const res = await axios.delete(`${itemURL}/${id}`, config);
  return res.data;
}

// ------------------ for Edit.jsx -------------------------
export const editItem = async(id, fields) => {
  const res = await axios.patch(`${itemURL}/${id}`, { fields }, config);
  // console.log(`patch request triggered`);
  return res.data;
}

export const editTitle = async(id, fields) => {
  const res = await axios.patch(`${titleURL}/${id}`, { fields }, config);
  console.log(`patch request triggered`);
  return res.data;
}