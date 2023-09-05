import {FaEdit} from 'react-icons/fa'

type EditProps = {
  id: number
}

function editEvent(id: number) {
  console.log('editItem', id)
}

export function EditEvent({id}: EditProps) {
  return (
    <span onClick={() => editEvent(id)} className={'clickable'}>
      <FaEdit />
    </span>
  )
}
