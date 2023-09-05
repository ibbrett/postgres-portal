'use client'

import {useUtils} from '@/hooks/useUtils'
import {ToggleEventComplete} from '@/components/events/ToggleEventComplete'
import {DeleteEvent} from '@/components/events/DeleteEvent'
import {EditEvent} from '@/components/events/EditEvent'
import {itemContainerStyle, itemLabelStyle} from '@/utils/styles'
import {useState} from 'react'

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
        <EditEvent id={id} />
        {/* removed from label to only allow checkbox to handle toggle - htmlFor={id.toString()} */}
        <label onClick={toggleItem} className={`${itemLabelStyle} date`}>
          {normalizeDateTimeTitle(timestamp, summary)}
        </label>
      </span>
      <pre className={'eventDetail'}>
        {detail} {id}
      </pre>
    </li>
  )
}
