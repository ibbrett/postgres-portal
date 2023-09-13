import {EventForm} from '@/components/events/EventForm'
import {useData} from '@/hooks/useData'
type Props = {
  params: {}
  searchParams: {section_id: string}
}
export default function Page(props: Props) {
  const searchParams = props.searchParams
  const section_id = searchParams.section_id
  const {SaveEvent} = useData()
  return <EventForm SaveEvent={SaveEvent} id={null} section_id={section_id} />
}
