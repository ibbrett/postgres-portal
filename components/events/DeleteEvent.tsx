import {FaTrash} from 'react-icons/fa'
import {iconContainer} from '@/utils/styles'

type DeleteProps = {
  id: number
  type: number
  deleteEvent: (id: number, type: number) => void
}

export function DeleteEvent({id, type, deleteEvent}: DeleteProps) {
  async function deleteItem(id: number, type: number) {
    const origin = process.env.NEXT_PUBLIC_ORIGIN
    const url = `${origin}/api/delete-event?id=${id}`
    const response = await fetch(url, {
      method: 'DELETE',
    })
    const data = await response.json()
    deleteEvent(id, type)
  }

  return (
    <span
      onClick={() => {
        if (window.confirm('Are you certain you want to remove this item?')) {
          deleteItem(id, type)
        }
      }}
      className={iconContainer}
    >
      <FaTrash />
    </span>
  )
}
