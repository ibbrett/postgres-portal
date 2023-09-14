import {FaTrash} from 'react-icons/fa'
import {clickable} from '@/utils/styles'

type DeleteProps = {
  id: number
  deleteSection: (id: number) => void
}

export function DeleteSection({id, deleteSection}: DeleteProps) {
  async function deleteItem(id: number) {
    const origin = process.env.NEXT_PUBLIC_ORIGIN
    const url = `${origin}/api/delete-section?id=${id}`
    const response = await fetch(url, {
      method: 'DELETE',
    })
    const data = await response.json()
    deleteSection(id)
  }

  return (
    <span
      onClick={() => {
        if (window.confirm('Are you certain you want to remove this item?')) {
          deleteItem(id)
        }
      }}
      className={clickable}
    >
      <FaTrash />
    </span>
  )
}
