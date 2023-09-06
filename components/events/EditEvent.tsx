import {FaEdit} from 'react-icons/fa'
import Link from 'next/link'

type EditProps = {
  id: number
}

function editEvent(id: number) {
  console.log('editItem', id)
}

export function EditEvent({id}: EditProps) {
  return (
    <Link href={`/tracker-events/edit?id=${id}`}>
      <FaEdit />
    </Link>
  )
}
