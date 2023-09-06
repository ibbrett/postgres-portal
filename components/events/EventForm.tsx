import Link from 'next/link'
import {DateTime} from '@/components/DateTime'
import {formFieldStyle, linkStyle} from '@/utils/styles'

type EventAction = (data: FormData) => void

type EventFormProps = {
  SaveEvent: EventAction
  id: string | null
}

async function getItem(id: string) {
  const origin = process.env.NEXT_PUBLIC_ORIGIN
  const response = await fetch(`${origin}/api/get-event?id=${id}`)
  const data = await response.json()
  return data
}

export async function EventForm({SaveEvent, id}: EventFormProps) {
  let summary = ''
  let detail = ''
  let complete = false
  let timestamp = null

  if (id) {
    const events = await getItem(id)
    const event = events[0]
    console.log('event', event)
    summary = event.summary
    detail = event.detail
    complete = event.complete
    timestamp = event.timestamp
  }

  return (
    <>
      <header className="flex justify-between mb-4 items-center">
        <h1 className="text-2xl">New Event {id}</h1>
      </header>
      <form action={SaveEvent} className="flex gap-2 flex-col">
        <span>Summary ( Title )</span>{' '}
        <input
          type="text"
          name="summary"
          defaultValue={summary}
          className={formFieldStyle}
        />
        <span>Detail</span>{' '}
        <textarea name="detail" defaultValue={detail} className={formFieldStyle} />
        <span>
          Completed{' '}
          <input type="checkbox" defaultChecked={complete} name="complete" />
        </span>
        <span>Date / Time</span>
        <DateTime name="timestamp" timestamp={timestamp} />
        <div className="flex gap-1 justify-end">
          <Link href="/tracker-events" className={linkStyle}>
            Cancel
          </Link>
          <button type="submit" className={linkStyle}>
            Save
          </button>
        </div>
        {id && <input type="hidden" name="id" value={id} />}
      </form>
    </>
  )
}
