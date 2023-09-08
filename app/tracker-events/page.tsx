'use client'

import Link from 'next/link'
import {EventItem} from '@/components/events/EventItem'
import {useFetch} from '@/hooks/useFetch'
import {useState, useEffect} from 'react'
import {ulStyle, headerStyle, h1Style, rowStyle} from '../../utils/styles'
import {EventSortTrigger} from '@/components/events/EventSortTrigger'
import {FaArrowLeft} from 'react-icons/fa'

const linkStyle =
  'border border-slate-800 text-slate-800 px-2 py-1 rounded hover:bg-gray-300 focus-within:bg-gray-300 outline-none align-items: center'

type IsAscProp = {
  isAsc: boolean
}

type EventProp = {
  id: number
  section_id: number
  summary: string
  detail: string
  timestamp: number
  complete: boolean
  created_at: string
  updated_at: string
}

export default function Home() {
  const defaultEventsState: EventProp[] = []
  const [activeEvents, setActiveEvents] = useState(defaultEventsState) // type: 0
  const [archivedEvents, setArchivedEvents] = useState(defaultEventsState) // type: 1
  const {fetchActiveEvents, fetchArchivedEvents} = useFetch()
  const [sortActiveEventsAsc, setSortActiveEventsAsc] = useState<IsAscProp>({
    isAsc: true,
  })
  const [sortArchivedEventsAsc, setSortArchivedEventsAsc] = useState<IsAscProp>({
    isAsc: true,
  })

  function orderEvents(events: EventProp[], sortAsc: {isAsc: boolean}) {
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
    const activeEvents = await fetchActiveEvents()
    const archivedEvents = await fetchArchivedEvents()

    let events = orderEvents(activeEvents, sortActiveEventsAsc)
    setActiveEvents(events)

    events = orderEvents(archivedEvents, sortArchivedEventsAsc)
    setArchivedEvents(events)
  }

  useEffect(() => {
    doFetch()
  }, [])

  return (
    <>
      <header className={headerStyle}>
        <h1 className={h1Style}>Events</h1>
        <span className={rowStyle}>
          <Link href=".." className={linkStyle} style={{padding: '8px'}}>
            <FaArrowLeft />
          </Link>
          <Link className={linkStyle} href="/tracker-events/new">
            New Event
          </Link>
        </span>
      </header>
      <div className={`${rowStyle} eventsSectionHeader`}>
        <h2>Active Events</h2>{' '}
        <EventSortTrigger
          setSortAsc={setSortActiveEventsAsc}
          setEvents={setActiveEvents}
          orderEvents={orderEvents}
          events={activeEvents}
        />
      </div>
      {/* <pre>{JSON.stringify(activeEvents)}</pre> */}
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
      <div className={`${rowStyle} eventsSectionHeader`}>
        <h2>Archived Events</h2>{' '}
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
  )
}
