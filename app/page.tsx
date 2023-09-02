// import Image from 'next/image'
// import styles from './page.module.css'
import Link from 'next/link'
import {linkStyle, headerStyle, h1Style} from '../utils/styles'
import {FaCog, FaStickyNote} from 'react-icons/fa'

export default function Home() {
  return (
    <>
      <header className={headerStyle}>
        <h1 className={h1Style}>{process.env.APP_TITLE}</h1>
        <span>
          [ <Link href="./sections">Sections</Link> |{' '}
          <Link href="./tracker-events">Tracker Events</Link> ]
        </span>
        <span>
          <Link className={linkStyle} href="/notes">
            <FaStickyNote />
          </Link>
          <Link className={linkStyle} href="/settings">
            <FaCog />
          </Link>
        </span>
      </header>
      <ul>
        <li>One</li>
        <li>Two</li>
        <li>Three</li>
      </ul>
    </>
  )
}
