'use client'

import Link from 'next/link'
import {EventItem} from '@/components/events/EventItem'
import {useFetch} from '@/hooks/useFetch'
import {useState, useEffect} from 'react'
import {
  linkStyle,
  ulStyle,
  headerStyle,
  h1Style,
  rowStyle,
  sectionHeader,
  hr,
} from '@/utils/styles'
import {EventSortTrigger} from '@/components/events/EventSortTrigger'
import {FaArrowLeft} from 'react-icons/fa'
import {Loading} from '@/components/controls/Loading'
import {useSearchParams} from 'next/navigation'
import {redirect} from 'next/navigation'

type IsAscProp = {
  isAsc: boolean
}

type EventProp = {
  id: number
  section_id: string
  summary: string
  detail: string
  timestamp: number
  complete: boolean
  created_at: string
  updated_at: string
}

export default function Home() {
  // get section_id param using client-side query params method
  const searchParams = useSearchParams()
  const section_id = searchParams.get('section_id')
  const {fetchActiveEvents, fetchArchivedEvents, fetchSection} = useFetch()

  if (typeof section_id !== 'string' || !section_id.length) {
    redirect('/' + section_id)
  }

  const defaultEventsState: EventProp[] = []
  const [activeEvents, setActiveEvents] = useState(defaultEventsState) // type: 0
  const [archivedEvents, setArchivedEvents] = useState(defaultEventsState) // type: 1
  const [sectionName, setSectionName] = useState('Event')
  const [eventsFetched, setEventsFetched] = useState(false)

  const [sortActiveEventsAsc, setSortActiveEventsAsc] = useState<IsAscProp>({
    isAsc: true,
  })
  const [sortArchivedEventsAsc, setSortArchivedEventsAsc] = useState<IsAscProp>({
    isAsc: true,
  })

  function orderEvents(events: EventProp[], sortAsc: {isAsc: boolean}) {
    if (!events.length) return []
    const clone = [...events]
    if (sortAsc.isAsc === true) clone.sort((a, b) => a.timestamp - b.timestamp)
    else clone.sort((a, b) => b.timestamp - a.timestamp)
    return clone
  }

  function deleteEvent(id: number, type: number) {
    if (type === 0) {
      const filteredEvents = activeEvents.filter(item => item.id !== id)
      setActiveEvents(filteredEvents)
    } else {
      const filteredEvents = archivedEvents.filter(item => item.id !== id)
      setArchivedEvents(filteredEvents)
    }
  }

  function moveToggledEvent(id: number, complete: boolean) {
    const activeEventsClone = [...activeEvents]
    const archivedEventsClone = [...archivedEvents]
    let orderedEvents

    // if false, find id in archived, move to active
    if (complete === true) {
      const foundItem = archivedEventsClone.find(item => item.id === id)
      if (foundItem !== undefined) {
        foundItem.complete = !complete
        // ! gets around error: Argument of type 'eventProp | undefined' is not assignable to parameter of type
        // it's saying you can trust this value
        // https://stackoverflow.com/questions/54496398/typescript-type-string-undefined-is-not-assignable-to-type-string
        activeEventsClone.push(foundItem!)
        setActiveEvents(orderEvents(activeEventsClone, sortActiveEventsAsc))
        const filteredEvents = archivedEvents.filter(item => item.id !== id)
        setArchivedEvents(orderEvents(filteredEvents, sortArchivedEventsAsc))
      }
    } else {
      const foundItem = activeEventsClone.find(item => item.id === id)
      if (foundItem !== undefined) {
        foundItem.complete = !complete
        archivedEventsClone.push(foundItem!)
        setArchivedEvents(orderEvents(archivedEventsClone, sortArchivedEventsAsc))
        const filteredEvents = activeEvents.filter(item => item.id !== id)
        setActiveEvents(orderEvents(filteredEvents, sortActiveEventsAsc))
      }
    }
  }

  async function doFetch() {
    console.log('fetchSection(section_id)', section_id)

    const eventSection = await fetchSection(section_id)

    setSectionName(eventSection.section.name)

    const activeEvents = await fetchActiveEvents(section_id)
    const archivedEvents = await fetchArchivedEvents(section_id)

    let events = orderEvents(activeEvents, sortActiveEventsAsc)
    setActiveEvents(events)

    events = orderEvents(archivedEvents, sortArchivedEventsAsc)
    setArchivedEvents(events)

    setEventsFetched(true)
  }

  useEffect(() => {
    doFetch()
  }, [])

  // if (activeEvents.length === 0 && archivedEvents.length === 0) return 'Loading...'

  return (
    <>
      <header className={headerStyle}>
        <h1 className={h1Style}>{sectionName} events</h1>
        <span className={rowStyle}>
          <Link href=".." className={linkStyle} style={{padding: '8px'}}>
            <FaArrowLeft />
          </Link>
          <Link
            className={linkStyle}
            href={{
              pathname: '/sections/event/new',
              query: {section_id: section_id},
            }}
          >
            New Event
          </Link>
        </span>
      </header>
      <hr className={hr} />

      {!eventsFetched && activeEvents.length === 0 && archivedEvents.length === 0 ? (
        <Loading
          msg="Fetching Events ..."
          margin="100px"
          spinnerColor="fill-blue-600"
        />
      ) : (
        <>
          <div className={sectionHeader}>
            <h2>Active</h2>{' '}
            <EventSortTrigger
              setSortAsc={setSortActiveEventsAsc}
              setEvents={setActiveEvents}
              orderEvents={orderEvents}
              events={activeEvents}
            />
          </div>

          <ul className={ulStyle}>
            {activeEvents.map(event => (
              <EventItem
                key={event.id}
                {...event}
                type={0}
                deleteEvent={deleteEvent}
                moveToggledEvent={moveToggledEvent}
              />
            ))}
          </ul>
          <div className={sectionHeader}>
            <h2>Archived</h2>{' '}
            <EventSortTrigger
              setSortAsc={setSortArchivedEventsAsc}
              setEvents={setArchivedEvents}
              orderEvents={orderEvents}
              events={archivedEvents}
            />
          </div>
          <ul className={ulStyle}>
            {archivedEvents.map(event => (
              <EventItem
                key={event.id}
                {...event}
                deleteEvent={deleteEvent}
                type={1}
                moveToggledEvent={moveToggledEvent}
              />
            ))}
          </ul>
        </>
      )}
    </>
  )
}
