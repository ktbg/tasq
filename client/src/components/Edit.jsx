import { useParams } from 'react-router-dom';

export default function Edit() {
  const { id, title } = useParams();
  return (
    <div>
      This is the edit page for {title}, id is {id}
    </div>
  )
}
