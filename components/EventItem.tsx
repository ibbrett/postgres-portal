'use client'

import {useUtils} from '@/hooks/useUtils'
import {FaTrash, FaEdit} from 'react-icons/fa'

type EventItemProps = {
  id: number
  timestamp: number
  detail: string | null
  summary: string
  complete: boolean
  toggleItem: (id: number, complete: boolean) => void
  deleteItem: (id: number) => void
}

const itemContainerStyle = 'flex gap-1 item-center my-2'
const itemFieldStyle = 'cursor-pointer peer'
const itemLabelStyle =
  'cursor-pointer peer-checked:line-through peer-checked:text-slate-500'
const itemDeleteStyle =
  'bg-gray-300 hover:bg-gray-400 text-red-700 font-bold px-1 ml-4 rounded inline-flex items-center'

export function EventItem({
  id,
  timestamp,
  detail,
  summary,
  complete,
  toggleItem,
  deleteItem,
}: EventItemProps) {
  const {normalizeDateTimeTitle} = useUtils()

  return (
    <li className={itemContainerStyle} key={id}>
      <input
        id={id.toString()}
        type="checkbox"
        className={itemFieldStyle}
        defaultChecked={complete}
        onChange={e => toggleItem(id, e.target.checked)}
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
