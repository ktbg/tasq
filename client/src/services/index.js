import axios from 'axios'

const airtableBase = process.env.REACT_APP_AIRTABLE_BASE;
const airtableKey = process.env.REACT_APP_AIRTABLE_KEY;

const URL = `https://api.airtable.com/v0/${airtableBase}/listTitles`
const config = {
  headers: {
    Authorization: `Bearer ${airtableKey}`,
  }
}

// ------------------- for Home.jsx --------------------------
export const getListNames = async () => {
  const res = await axios.get(URL, config);
  return res.data.records;
}