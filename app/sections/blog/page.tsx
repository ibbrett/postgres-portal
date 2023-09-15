import Link from 'next/link'
import {linkStyle, headerStyle, h1Style, rowStyle, hr} from '@/utils/styles'
import {BackButton} from '@/components/controls/buttons/BackButton'

export default function Page() {
  return (
    <>
      <header className={headerStyle}>
        <h1 className={h1Style}>blog</h1>
        <span className={rowStyle}>
          <BackButton />
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
