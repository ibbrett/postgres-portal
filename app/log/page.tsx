import {headerStyle, h1Style} from '@/utils/styles'
import {BackButton} from '@/components/controls/buttons/BackButton'

export default function Page() {
  return (
    <>
      <header className={headerStyle}>
        <h1 className={h1Style}>Activity Log</h1>
        <BackButton />
      </header>
    </>
  )
}
