import {headerStyle, hr} from '@/utils/styles'
import {BackButton} from '@/components/controls/buttons/BackButton'
import {EventLists} from '@/components/events/EventLists'
import {AppTitle} from '@/components/AppTitle'
// import {SectionsNav} from '@/components/sections/SectionsNav'

export default function Home() {
  return (
    <>
      <header className={headerStyle}>
        <AppTitle />
        {/*<SectionsNav />*/}
        <BackButton />
      </header>
      <hr className={hr} />
      <EventLists />
    </>
  )
}
