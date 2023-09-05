import Link from 'next/link'
import {Tables} from '@/components/Tables'
import {headerStyle, h1Style, linkStyle} from '@/utils/styles'
import {FaArrowLeft} from 'react-icons/fa'

export default function Page() {
  return (
    <>
      <header className={headerStyle}>
        <h1 className={h1Style}>Database Tables</h1>
        <Link href=".." className={linkStyle}>
          <FaArrowLeft />
        </Link>
      </header>

      <Tables table="section" />
      <Tables table="log" />
      <Tables table="event" />
    </>
  )
}
