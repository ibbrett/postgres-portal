import Link from 'next/link'
import {DateTime} from '@/components/DateTime'
import {formFieldStyle, linkStyle} from '@/utils/styles'

type EventAction = (data: FormData) => void

type EventFormProps = {
  SaveNewEvent: EventAction
}

export function EventForm({SaveNewEvent}: EventFormProps) {
  return (
    <>
      <header className="flex justify-between mb-4 items-center">
        <h1 className="text-2xl">New Event</h1>
      </header>
      <form action={SaveNewEvent} className="flex gap-2 flex-col">
        <span>Summary ( Title )</span>{' '}
        <input type="text" name="summary" className={formFieldStyle} />
        <span>Detail</span> <textarea name="detail" className={formFieldStyle} />
        <span>
          Completed <input type="checkbox" name="complete" />
        </span>
        <span>Date / Time</span>
        <DateTime name="timestamp" />
        <div className="flex gap-1 justify-end">
          <Link href=".." className={linkStyle}>
            Cancel
          </Link>
          <button type="submit" className={linkStyle}>
            Save
          </button>
        </div>
      </form>
    </>
  )
}
