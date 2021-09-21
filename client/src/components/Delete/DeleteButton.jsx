
import { useHistory } from 'react-router';
import { deleteList, deleteItem } from '../../services';
import TrashCan from './TrashCan';

export default function DeleteButton(props) {
  const {items, id, type, className} = props;
  const history = useHistory();

  const handleDelete = async () => {
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
    <button className={className} onClick={handleDelete}>
      {type==="create" ? "Delete List" :
        <TrashCan className={"ml-6"}/>
      }
    </button>
  )
}
