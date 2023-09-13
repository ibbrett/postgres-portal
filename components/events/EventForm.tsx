import Link from 'next/link'
import {DateTime} from '@/components/DateTime'
import {form_field, linkStyle} from '@/utils/styles'

type EventAction = (data: FormData) => void

type EventFormProps = {
  SaveEvent: EventAction
  id: string | null
  section_id: string | number | readonly string[] | undefined
}
// searchParams: {[section_id: string]: string | string[] | undefined}

async function getItem(id: string) {
  const origin = process.env.NEXT_PUBLIC_ORIGIN
  const response = await fetch(`${origin}/api/get-event?id=${id}`, {
    cache: 'no-store',
  })
  /*
  const response = await fetch(`${origin}/api/get-event?id=${id}`, {
    cache: 'no-store',
  })
  */
  const data = await response.json()
  return data
}

export async function EventForm({SaveEvent, id, section_id}: EventFormProps) {
  console.log('EventForm: section_id', section_id)

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
    section_id = event.section_id
  }

  return (
    <>
      <header className="flex justify-between mb-4 items-center">
        <h1 className="text-2xl">New Event {id}</h1>
      </header>
      <form action={SaveEvent} className="flex gap-2 flex-col">
        <span>Summary</span>{' '}
        <input
          type="text"
          name="summary"
          defaultValue={summary}
          className={form_field}
          placeholder="Add event title here..."
        />
        <span>Detail</span>{' '}
        <textarea
          name="detail"
          rows={4}
          defaultValue={detail}
          className={form_field}
          placeholder="Add event details here..."
        />
        <span>
          Completed{' '}
          <input
            type="checkbox"
            defaultChecked={complete}
            className={form_field}
            name="complete"
          />
        </span>
        <span>Date / Time</span>
        <DateTime name="timestamp" timestamp={timestamp} />
        <div className="flex gap-1 justify-end">
          <Link
            href={{pathname: '/sections/event', query: {section_id: section_id}}}
            className={linkStyle}
          >
            Cancel
          </Link>
          <button type="submit" className={linkStyle}>
            Save
          </button>
        </div>
        {id && <input type="hidden" name="id" value={id} />}
        <input type="hidden" name="section_id" value={section_id} />
      </form>
    </>
  )
}
