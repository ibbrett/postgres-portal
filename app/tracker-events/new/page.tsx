import {EventForm} from '@/components/EventForm'
import {useData} from '@/hooks/useData'

export default function Page() {
  const {SaveEvent} = useData()
  return <EventForm CreateEvent={SaveEvent} />
}
