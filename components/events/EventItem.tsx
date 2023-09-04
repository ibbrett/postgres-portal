'use client'

import {useUtils} from '@/hooks/useUtils'
import {FaEdit} from 'react-icons/fa'
import {ToggleEventComplete} from '@/components/events/ToggleEventComplete'
import {DeleteEvent} from '@/components/events/DeleteEvent'
import {itemContainerStyle, itemLabelStyle, itemDeleteStyle} from '@/utils/styles'

function editEvent(id: number) {
  console.log('editItem', id)
}

type EventItemProps = {
  id: number
  type: number
  timestamp: number
  detail: string | null
  summary: string
  complete: boolean
  deleteEvent: (id: number, type: number) => void
  moveToggledEvent: (id: number, complete: boolean) => void
}

export function EventItem({
  id,
  type,
  timestamp,
  detail,
  summary,
  complete,
  deleteEvent,
  moveToggledEvent,
}: EventItemProps) {
  const {normalizeDateTimeTitle} = useUtils()

  return (
    <li className={itemContainerStyle} key={id}>
      <ToggleEventComplete
        id={id}
        complete={complete}
        moveToggledEvent={moveToggledEvent}
      />
      <label htmlFor={id.toString()} className={itemLabelStyle}>
        {normalizeDateTimeTitle(timestamp, summary)}
      </label>

      <DeleteEvent id={id} type={type} deleteEvent={deleteEvent} />

      <span onClick={() => editEvent(id)} className={itemDeleteStyle}>
        <FaEdit />
      </span>

      <pre>
        {detail} {id}
      </pre>
    </li>
  )
}
