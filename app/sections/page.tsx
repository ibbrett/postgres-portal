'use client'

import Link from 'next/link'
import {headerStyle, h1Style, linkStyle, hr} from '@/utils/styles'
import {FaArrowLeft} from 'react-icons/fa'
import {List} from '@/components/sections/List'

export default function Page() {
  const appTitle = process.env.NEXT_PUBLIC_APP_TITLE

  return (
    <>
      <header className={headerStyle}>
        <h1 className={h1Style}>{appTitle} Sections</h1>
        <Link href=".." className={linkStyle}>
          <FaArrowLeft />
        </Link>
      </header>

      <hr className={hr} />
      <List />
    </>
  )
}
