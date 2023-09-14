import {FaEdit} from 'react-icons/fa'
import Link from 'next/link'

type EditProps = {
  id: number
}

export function EditSection({id}: EditProps) {
  return (
    <Link
      href={{
        pathname: '/sections/edit',
        query: {
          id: id,
        },
      }}
    >
      <FaEdit />
    </Link>
  )
}
