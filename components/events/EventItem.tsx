'use client'

import {useUtils} from '@/hooks/useUtils'
import {ToggleEventComplete} from '@/components/events/ToggleEventComplete'
import {DeleteEvent} from '@/components/events/DeleteEvent'
import {itemContainerStyle, dateString, eventDetail} from '@/utils/styles'
import {useState} from 'react'
import {EditItem} from '@/components/controls/buttons/EditItem'

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
  const [classList, setClassList] = useState('by-date active')

  const toggleItem = () => {
    if (classList.includes('active')) {
      setClassList('by-date')
    } else {
      setClassList('by-date active')
    }
  }

  return (
    <li key={id} className={classList}>
      <span className={`${itemContainerStyle}`}>
        <ToggleEventComplete
          id={id}
          complete={complete}
          moveToggledEvent={moveToggledEvent}
        />
        <DeleteEvent id={id} type={type} deleteEvent={deleteEvent} />
        <EditItem pathname="/sections/event/edit" query={{id: id}} />
        {/* removed from label to only allow checkbox to handle toggle - htmlFor={id.toString()} */}
        <label onClick={toggleItem} className={`${dateString}`}>
          {normalizeDateTimeTitle(timestamp, summary)}
        </label>
      </span>
      <pre className={eventDetail}>{detail}</pre>
    </li>
  )
}
