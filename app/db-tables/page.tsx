import Link from 'next/link'
import {Tables} from '@/components/Tables'
import {headerStyle, h1Style, linkStyle} from '@/utils/styles'
import {BackButton} from '@/components/controls/buttons/BackButton'

export default function Page() {
  return (
    <>
      <header className={headerStyle}>
        <h1 className={h1Style}>Database Tables</h1>
        <BackButton />
      </header>
      <Tables table="section" />
      <Tables table="log" />
      <Tables table="event" />
    </>
  )
}
