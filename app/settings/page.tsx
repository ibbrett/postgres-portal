import Link from 'next/link'
import {headerStyle, h1Style, hr} from '@/utils/styles'
import {BackButton} from '@/components/controls/buttons/BackButton'
import {Tuyo} from '@/components/Tuyo'
import {SettingsForm} from '@/components/settings/SettingsForm'
import {AppTitle} from '@/components/AppTitle'

export default function Page() {
  return (
    <>
      <header className={headerStyle}>
        <AppTitle />
        <BackButton />
      </header>
      <hr className={hr} />
      <div className={headerStyle}>
        <h1 className={h1Style}>Settings</h1>
        <span>
          [ <Link href="/sections">Sections</Link> |{' '}
          <Link href="/db-tables">Database Tables</Link> ]
        </span>
        <span> </span>
      </div>
      <SettingsForm />
      <Tuyo />
    </>
  )
}
