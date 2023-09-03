'use client'

import Link from 'next/link'
import {EventItem} from '@/components/events/EventItem'
import {useFetch} from '@/hooks/useFetch'
import {useState, useEffect} from 'react'
import {FaArrowUp, FaArrowDown} from 'react-icons/fa'
import {linkStyle, ulStyle, headerStyle, h1Style, rowStyle} from '../../utils/styles'

function deleteItem(id: number) {
  console.log('deleteItem', id)
}

type eventProp = {
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
  const defaultEventsState: eventProp[] = []
  const [activeEvents, setActiveEvents] = useState(defaultEventsState)
  const [archivedEvents, setArchivedEvents] = useState(defaultEventsState)
  const {fetchActiveEvents, fetchArchivedEvents} = useFetch()

  function orderEvents(
    events: eventProp[],
    setEvents: <eventProp>([]) => void,
    asc: boolean
  ) {
    const eventsClone = [...events]
    if (asc === true) eventsClone.sort((a, b) => a.timestamp - b.timestamp)
    else eventsClone.sort((a, b) => b.timestamp - a.timestamp)
    setEvents(eventsClone)
  }

  function moveToggledEvent(id: number, complete: boolean) {
    console.log(`moveToggledEvent: ${id} - ${complete}`)

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
        setActiveEvents(activeEventsClone)
        const filteredEvents = archivedEvents.filter(item => item.id !== id)
        console.log(foundItem, filteredEvents)
        setArchivedEvents(filteredEvents)
      }
    } else {
      const foundItem = activeEventsClone.find(item => item.id === id)
      if (foundItem !== undefined) {
        foundItem.complete = !complete
        archivedEventsClone.push(foundItem!)
        setArchivedEvents(archivedEventsClone)
        const filteredEvents = activeEvents.filter(item => item.id !== id)
        console.log(foundItem, filteredEvents)
        setActiveEvents(filteredEvents)
      }
    }

    // else, find id in active, move to  archived
  }

  async function doFetch() {
    const activeEvents = await fetchActiveEvents()
    const archivedEvents = await fetchArchivedEvents()
    setActiveEvents(activeEvents)
    setArchivedEvents(archivedEvents)
  }

  useEffect(() => {
    doFetch()
  }, [])

  return (
    <>
      <header className={headerStyle}>
        <h1 className={h1Style}>Events</h1>
        <Link className={linkStyle} href="/tracker-events/new">
          New
        </Link>
      </header>
      <div className={rowStyle}>
        <h2>Active Events</h2>{' '}
        <span style={{cursor: 'pointer', paddingLeft: '5px'}}>
          <FaArrowUp
            onClick={() => orderEvents(activeEvents, setActiveEvents, true)}
          />
        </span>
        <span style={{cursor: 'pointer', paddingLeft: '5px'}}>
          <FaArrowDown
            onClick={() => orderEvents(activeEvents, setActiveEvents, false)}
          />
        </span>
      </div>
      {/* <pre>{JSON.stringify(activeEvents)}</pre> */}
      <ul className={ulStyle}>
        {activeEvents.map(event => (
          <EventItem
            key={event.id}
            {...event}
            deleteItem={deleteItem}
            moveToggledEvent={moveToggledEvent}
          />
        ))}
      </ul>
      <div className={rowStyle}>
        <h2>Archived Events</h2>{' '}
        <span style={{cursor: 'pointer', paddingLeft: '5px'}}>
          <FaArrowUp
            onClick={() => orderEvents(archivedEvents, setArchivedEvents, true)}
          />
        </span>
        <span style={{cursor: 'pointer', paddingLeft: '5px'}}>
          <FaArrowDown
            onClick={() => orderEvents(archivedEvents, setArchivedEvents, false)}
          />
        </span>
      </div>
      <ul className={ulStyle}>
        {archivedEvents.map(event => (
          <EventItem
            key={event.id}
            {...event}
            deleteItem={deleteItem}
            moveToggledEvent={moveToggledEvent}
          />
        ))}
      </ul>
    </>
  )
}
