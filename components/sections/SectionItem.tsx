import {DeleteSection} from '@/components/sections/DeleteSection'
import {itemContainerStyle} from '@/utils/styles'
import Link from 'next/link'
import {EditItem} from '@/components/controls/buttons/EditItem'

type SectionItemProps = {
  id: number
  name: string
  type: string
  deleteSection: (id: number) => void
}

export function SectionItem({id, name, type, deleteSection}: SectionItemProps) {
  return (
    <li key={id} className={''}>
      <span data-parent={name} className={`${itemContainerStyle}`}>
        <DeleteSection data-delete={name} id={id} deleteSection={deleteSection} />
        <EditItem data-edit={name} pathname="/sections/edit" query={{id: id}} />
        <Link
          data-label={name}
          href={{
            pathname: `/sections/${type}`,
            query: {
              section_id: id,
            },
          }}
        >
          {name} [{type}]
        </Link>
      </span>
    </li>
  )
}
