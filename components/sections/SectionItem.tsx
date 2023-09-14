'use client'

import {useUtils} from '@/hooks/useUtils'
import {DeleteSection} from '@/components/sections/DeleteSection'
import {EditSection} from '@/components/sections/EditSection'
import {itemContainerStyle, dateString, eventDetail} from '@/utils/styles'
import {useState} from 'react'

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
        <label className={''}>
          {name} [{type}]
        </label>
      </span>
    </li>
  )
}
