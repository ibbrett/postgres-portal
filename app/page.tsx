import Link from 'next/link'
import {linkStyle, headerStyle, h1Style} from '@/utils/styles'
import {FaCog} from 'react-icons/fa'
import {rowStyle, hr} from '@/utils/styles'
import {SectionsNav} from '@/components/sections/SectionsNav'
import {AppTitle} from '@/components/AppTitle'

export default function Home() {
  return (
    <>
      <header className={headerStyle}>
        <AppTitle />
        {/*<SectionsNav />*/}
        <span className={rowStyle}>
          <Link className={linkStyle} href="/settings">
            <FaCog />
          </Link>
        </span>
      </header>
      <hr className={hr} />
      <h2>Docs</h2>
    </>
  )
}
