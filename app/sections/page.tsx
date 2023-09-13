import Link from 'next/link'
import {Tables} from '@/components/Tables'
import {headerStyle, h1Style, linkStyle} from '@/utils/styles'
import {FaArrowLeft} from 'react-icons/fa'

// hard-coded garbage
const sections = ['Job Search Log', 'Tracker Events']
export default function Page() {
  return (
    <>
      <header className={headerStyle}>
        <h1 className={h1Style}>Sections</h1>
        <Link href=".." className={linkStyle}>
          <FaArrowLeft />
        </Link>
      </header>

      <ul>
        {sections.map((section, i) => (
          <li key={i}>
            {i + 1}) {section}
          </li>
        ))}
      </ul>
    </>
  )
}
