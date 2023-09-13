import {EventForm} from '@/components/events/EventForm'
import {useData} from '@/hooks/useData'
// import {useSearchParams} from 'next/navigation'

/*
type Params = {
  section_id: string
}*/

// app/posts/page.ts
type Props = {
  params: {}
  searchParams: {section_id: string}
}
// searchParams: {[section_id: string]: string | string[] | undefined}

// export default function Page({section_id}: Params) {
export default function Page(props: Props) {
  const searchParams = props.searchParams
  const section_id = searchParams.section_id
  //const page = searchParams.page

  console.log('New Event - section_id - page', searchParams)
  const {SaveEvent} = useData()
  return <EventForm SaveEvent={SaveEvent} id={null} section_id={section_id} />
}
