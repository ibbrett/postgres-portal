import {itemFieldStyle} from '@/utils/styles'

type ToggleCheckProps = {
  id: number
  complete: boolean
  moveToggledEvent: (id: number, complete: boolean) => void
}

export function ToggleEventComplete({
  id,
  complete,
  moveToggledEvent,
}: ToggleCheckProps) {
  async function toggleItem(id: number, complete: boolean) {
    const origin = process.env.NEXT_PUBLIC_ORIGIN
    const payload = {data: {id}}
    const response = await fetch(`${origin}/api/toggle-event-complete`, {
      method: 'PUT',
      body: JSON.stringify(payload),
      headers: {
        'Content-Type': 'application/json',
      },
    })
    moveToggledEvent(id, complete)
  }

  return (
    <input
      id={id.toString()}
      type="checkbox"
      className={itemFieldStyle}
      defaultChecked={complete}
      onChange={e => {
        toggleItem(id, complete)
      }}
    />
  )
}
