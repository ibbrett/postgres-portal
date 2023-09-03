import {itemFieldStyle} from '@/utils/styles'

type IsReadyProp = {
  isReady: boolean
}
type toggleCheckProps = {
  id: number
  complete: boolean
  setEventsReady: ({}: IsReadyProp) => void
}

export function ToggleEventComplete({
  id,
  complete,
  setEventsReady,
}: toggleCheckProps) {
  async function toggleItem(id: number) {
    const origin = process.env.NEXT_PUBLIC_ORIGIN
    const payload = {data: {id}}
    const response = await fetch(`${origin}/api/toggle-event-complete`, {
      method: 'PUT',
      body: JSON.stringify(payload),
      headers: {
        'Content-Type': 'application/json',
      },
    })
    setEventsReady({isReady: false})
  }

  return (
    <input
      id={id.toString()}
      type="checkbox"
      className={itemFieldStyle}
      defaultChecked={complete}
      onChange={e => {
        toggleItem(id)
      }}
    />
  )
}
