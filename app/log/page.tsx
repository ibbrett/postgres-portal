import Link from 'next/link'
import {useFiles} from '@/hooks/useFiles'
import {FaArrowLeft} from 'react-icons/fa'
import {linkStyle, headerStyle, h1Style} from '@/utils/styles'

export default function Page() {
  return (
    <>
      <header className={headerStyle}>
        <h1 className={h1Style}>Activity Log</h1>
        <Link href=".." className={linkStyle}>
          <FaArrowLeft />
        </Link>
      </header>
    </>
  )
}
