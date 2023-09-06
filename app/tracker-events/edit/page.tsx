import {EventForm} from '@/components/events/EventForm'
import {useData} from '@/hooks/useData'

type Params = {
  id: string
}
type ServerSideParams = {
  searchParams: Params
}
export default function Page({searchParams}: ServerSideParams) {
  const {SaveEvent} = useData()
  return <EventForm SaveEvent={SaveEvent} id={searchParams.id} />
}
