import Link from 'next/link'
import {DateTime} from '@/components/DateTime'
import {
  formStyle,
  formField,
  linkStyle,
  headerStyle,
  h1Style,
  formButtonContainer,
} from '@/utils/styles'

type EventAction = (data: FormData) => void

type EventFormProps = {
  SaveEvent: EventAction
  id: string | null
  section_id: string | number | readonly string[] | undefined
}

async function getItem(id: string) {
  const origin = process.env.NEXT_PUBLIC_ORIGIN
  const response = await fetch(`${origin}/api/get-event?id=${id}`) // , {cache: 'no-store'}
  const data = await response.json()
  return data
}

export async function EventForm({SaveEvent, id, section_id}: EventFormProps) {
  let summary = ''
  let detail = ''
  let complete = false
  let timestamp = null
  let pageTitle = 'New Event'

  if (id) {
    const events = await getItem(id)
    const event = events[0]
    summary = event.summary
    detail = event.detail
    complete = event.complete
    timestamp = event.timestamp
    section_id = event.section_id
    pageTitle = 'Edit Event'
  }

  return (
    <>
      <header className={headerStyle}>
        <h1 data-header="event-form-header" className={h1Style}>
          {pageTitle}
        </h1>
      </header>
      <form action={SaveEvent} className={formStyle}>
        <span>Summary</span>{' '}
        <input
          type="text"
          name="summary"
          defaultValue={summary}
          className={formField}
          placeholder="Add event title here..."
        />
        <span>Detail</span>{' '}
        <textarea
          name="detail"
          rows={4}
          defaultValue={detail}
          className={formField}
          placeholder="Add event details here..."
        />
        <span>
          Completed{' '}
          <input
            type="checkbox"
            defaultChecked={complete}
            className={formField}
            name="complete"
          />
        </span>
        <span>Date / Time</span>
        <DateTime name="timestamp" timestamp={timestamp} />
        <div className={formButtonContainer}>
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
