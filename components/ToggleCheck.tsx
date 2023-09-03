import {itemFieldStyle} from '@/utils/styles'
import {redirect} from 'next/navigation'

type IsReadyProp = {
  isReady: boolean
}
type toggleCheckProps = {
  id: number
  complete: boolean
  setEventsReady: ({}: IsReadyProp) => void
}

export function ToggleCheck({id, complete, setEventsReady}: toggleCheckProps) {
  async function toggleItem(id: number) {
    const origin = process.env.NEXT_PUBLIC_ORIGIN
    console.log('toggleItem', origin, id)
    const payload = {data: {id}}
    const response = await fetch(`${origin}/api/update-event`, {
      method: 'PUT',
      body: JSON.stringify(payload),
      headers: {
        'Content-Type': 'application/json',
      },
    })
    setEventsReady({isReady: false})
    // window.location.href = '/tracker-events'
  }

  return (
    <input
      id={id.toString()}
      type="checkbox"
      className={itemFieldStyle}
      defaultChecked={complete}
      onChange={e => {
        toggleItem(id)
        // window.location.href = '/tracker-events'
        //redirect('/tracker-events')
      }}
    />
  )
}
