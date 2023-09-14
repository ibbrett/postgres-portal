'use client'

import {DeleteSection} from '@/components/sections/DeleteSection'
import {EditSection} from '@/components/sections/EditSection'
import {itemContainerStyle, dateString, eventDetail} from '@/utils/styles'
import Link from 'next/link'

type SectionItemProps = {
  id: number
  name: string
  type: string
  deleteSection: (id: number) => void
}

export function SectionItem({id, name, type, deleteSection}: SectionItemProps) {
  return (
    <li key={id} className={''}>
      <span className={`${itemContainerStyle}`}>
        <DeleteSection id={id} deleteSection={deleteSection} />
        <EditSection id={id} />
        <Link
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
