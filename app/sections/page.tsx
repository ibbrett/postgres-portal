import {headerStyle, h1Style, hr} from '@/utils/styles'
import {SectionsList} from '@/components/sections/SectionsList'
import {BackButton} from '@/components/controls/buttons/BackButton'
import {AppTitle} from '@/components/AppTitle'

export default function Page() {
  return (
    <>
      <header className={headerStyle}>
        <AppTitle />
        <BackButton />
      </header>
      <hr className={hr} />
      <SectionsList />
    </>
  )
}
