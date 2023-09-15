import {iconContainer} from '@/utils/styles'
import Link from 'next/link'
import {FaEdit} from 'react-icons/fa'

type EditItemProps = {
  pathname: string
  query: {
    id: number
  }
}
export function EditItem({pathname, query}: EditItemProps) {
  return (
    <Link
      className={iconContainer}
      href={{
        pathname,
        query,
      }}
    >
      <FaEdit />
    </Link>
  )
}
