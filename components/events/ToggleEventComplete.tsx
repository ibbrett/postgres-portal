import {itemFieldStyle} from '@/utils/styles'

type IsReadyProp = {
  isReady: boolean
}
type toggleCheckProps = {
  id: number
  complete: boolean
  setEventsReady: ({}: IsReadyProp) => void
  moveToggledEvent: (id: number, complete: boolean) => void
}

export function ToggleEventComplete({
  id,
  complete,
  setEventsReady,
  moveToggledEvent,
}: toggleCheckProps) {
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

    /*
    console.log('response', response)
    if (response.status === 200) {
      console.log('response status is 200 - proceed with awesomeness')
      console.log('response.body', response.body)
    } else {
      console.log('response status is NOT 200 - sumpin happn')
    }*/
    // setEventsReady({isReady: false})
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
