import Link from 'next/link'
import {DateTime} from '@/components/DateTime'
import {formFieldStyle, formButtonStyle} from '@/utils/styles'

type EVENT_FUNCTION = (data: FormData) => void

type EventFormProps = {
  CreateEvent: EVENT_FUNCTION
}
export function EventForm({CreateEvent}: EventFormProps) {
  return (
    <>
      <header className="flex justify-between mb-4 items-center">
        <h1 className="text-2xl">New Event</h1>
      </header>
      <form action={CreateEvent} className="flex gap-2 flex-col">
        <span>Summary ( Title )</span>{' '}
        <input type="text" name="summary" className={formFieldStyle} />
        <span>Detail</span> <textarea name="detail" className={formFieldStyle} />
        <span>
          Completed <input type="checkbox" name="complete" />
        </span>
        <span>Date / Time</span>
        <DateTime name="timestamp" />
        <div className="flex gap-1 justify-end">
          <Link href=".." className={formButtonStyle}>
            Cancel
          </Link>
          <button type="submit" className={formButtonStyle}>
            Create
          </button>
        </div>
      </form>
    </>
  )
}
