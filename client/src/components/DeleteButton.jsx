
import { useHistory } from 'react-router';
import { deleteList, deleteItem } from '../services';

export default function DeleteButton(props) {
  const {items, id} = props;
  const history = useHistory();

  const handleDelete = async () => {
    console.log("delete button clicked");
    const urlEncode = items.map((item) => {
      return item.id;
    })
 
    urlEncode.forEach(async(id) => {
      await deleteItem(id);
    });
    await deleteList(id);
    history.push('/');
  }

  return (
    <button onClick={handleDelete}>Delete</button>
  )
}
