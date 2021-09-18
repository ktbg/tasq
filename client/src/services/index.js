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

export const getListItems = async (id) => {
  const res = await axios.get(itemURL, config);
  // console.log(res.data.records[2].fields.item);
  // let itemArr = res.data.records.filter((item)=>{
  //   return item.fields.item === `${id}`;
  // });
  // console.log(itemArr);
  return res.data.records;
  // const items = res.data.records.filter(item =>item.fields.listTitles === `${id}`);
  // return items;
}