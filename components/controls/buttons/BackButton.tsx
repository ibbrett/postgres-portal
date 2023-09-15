import {linkStyle} from '@/utils/styles'
import Link from 'next/link'
import {FaArrowLeft} from 'react-icons/fa'

export function BackButton() {
  return (
    <Link href=".." className={linkStyle}>
      <FaArrowLeft />
    </Link>
  )
}
