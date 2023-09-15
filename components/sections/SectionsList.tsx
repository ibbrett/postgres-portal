import {headerStyle, h1Style} from '@/utils/styles'
import {AddButton} from '@/components/controls/buttons/AddButton'
import {SectionItems} from '@/components/sections/SectionItems'

export function SectionsList() {
  return (
    <>
      <header className={headerStyle}>
        <h1 className={h1Style}>Section List</h1>
        <AddButton pathname="/sections/new" query={{}} />
      </header>

      <SectionItems />
    </>
  )
}
