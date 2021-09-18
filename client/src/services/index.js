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
export const getListItems = async (id) => {
  const res = await axios.get(itemURL, config);
  return res.data.records;
}