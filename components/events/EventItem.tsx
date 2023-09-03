'use client'

import {useUtils} from '@/hooks/useUtils'
import {FaTrash, FaEdit} from 'react-icons/fa'
import {ToggleEventComplete} from '@/components/events/ToggleEventComplete'
import {itemContainerStyle, itemLabelStyle, itemDeleteStyle} from '@/utils/styles'

type EventItemProps = {
  id: number
  timestamp: number
  detail: string | null
  summary: string
  complete: boolean
  deleteItem: (id: number) => void
  moveToggledEvent: (id: number, complete: boolean) => void
}

export function EventItem({
  id,
  timestamp,
  detail,
  summary,
  complete,
  deleteItem,
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
      <span
        onClick={() => {
          if (window.confirm('Are you certain you want to remove this item?')) {
            deleteItem(id)
          }
        }}
        className={itemDeleteStyle}
      >
        <FaTrash />
      </span>
      <span onClick={() => deleteItem(id)} className={itemDeleteStyle}>
        <FaEdit />
      </span>
      <pre>{detail}</pre>
    </li>
  )
}
