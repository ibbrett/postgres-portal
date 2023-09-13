'use client'

import Link from 'next/link'
import {linkStyle, headerStyle, h1Style, rowStyle, hr} from '@/utils/styles'
import {FaArrowLeft} from 'react-icons/fa'

export default function Page() {
  return (
    <>
      <header className={headerStyle}>
        <h1 className={h1Style}>blog</h1>
        <span className={rowStyle}>
          <Link href=".." className={linkStyle} style={{padding: '8px'}}>
            <FaArrowLeft />
          </Link>
          <Link
            className={linkStyle}
            href={{
              pathname: '/sections/blog/new',
              query: {section_id: 0},
            }}
          >
            New Blog
          </Link>
        </span>
      </header>

      <hr className={hr} />
    </>
  )
}
