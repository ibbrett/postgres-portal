import {EventForm} from '@/components/events/EventForm'
import {useData} from '@/hooks/useData'

export default function Page() {
  const {SaveEvent} = useData()
  return <EventForm SaveNewEvent={SaveEvent} />
}
