import {linkStyle} from '@/utils/styles'
import Link from 'next/link'
import {FaPlus} from 'react-icons/fa'

type AddButtonProps = {
  pathname: string
  query: {
    id?: number | undefined
    section_id?: string | undefined
  }
}

export function AddButton({pathname, query}: AddButtonProps) {
  return (
    <Link
      className={linkStyle}
      href={{
        pathname: pathname,
        query,
      }}
    >
      <FaPlus />
    </Link>
  )
}
