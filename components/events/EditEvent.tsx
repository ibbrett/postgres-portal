import {FaEdit} from 'react-icons/fa'
import Link from 'next/link'

type EditProps = {
  id: number
}

export function EditEvent({id}: EditProps) {
  // console.log('id, section_id', id)
  return (
    <Link
      href={{
        pathname: '/sections/event/edit',
        query: {
          id: id,
        },
      }}
    >
      <FaEdit />
    </Link>
  )
}
