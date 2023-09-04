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

type IsAscProp = {
  isAsc: boolean
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
  const [sortActiveEventsAsc, setSortActiveEventsAsc] = useState<IsAscProp>({
    isAsc: true,
  })
  const [sortArchivedEventsAsc, setSortArchivedEventsAsc] = useState<IsAscProp>({
    isAsc: true,
  })

  function orderEvents(events: eventProp[], asc: boolean) {
    const clone = [...events]
    if (asc === true) clone.sort((a, b) => a.timestamp - b.timestamp)
    else clone.sort((a, b) => b.timestamp - a.timestamp)
    return clone
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
        setActiveEvents(orderEvents(activeEventsClone, sortActiveEventsAsc.isAsc))
        const filteredEvents = archivedEvents.filter(item => item.id !== id)
        setArchivedEvents(orderEvents(filteredEvents, sortArchivedEventsAsc.isAsc))
      }
    } else {
      const foundItem = activeEventsClone.find(item => item.id === id)
      if (foundItem !== undefined) {
        foundItem.complete = !complete
        archivedEventsClone.push(foundItem!)
        setArchivedEvents(
          orderEvents(archivedEventsClone, sortArchivedEventsAsc.isAsc)
        )
        const filteredEvents = activeEvents.filter(item => item.id !== id)
        setActiveEvents(orderEvents(filteredEvents, sortActiveEventsAsc.isAsc))
      }
    }
  }

  async function doFetch() {
    const activeEvents = await fetchActiveEvents()
    const archivedEvents = await fetchArchivedEvents()

    let events = orderEvents(activeEvents, sortActiveEventsAsc.isAsc)
    setActiveEvents(events)

    events = orderEvents(archivedEvents, sortArchivedEventsAsc.isAsc)
    setArchivedEvents(events)
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
            onClick={() => {
              setSortActiveEventsAsc({
                isAsc: true,
              })
              const events = orderEvents(activeEvents, true)
              setActiveEvents(events)
            }}
          />
        </span>
        <span style={{cursor: 'pointer', paddingLeft: '5px'}}>
          <FaArrowDown
            onClick={() => {
              setSortActiveEventsAsc({
                isAsc: false,
              })
              const events = orderEvents(activeEvents, false)
              setActiveEvents(events)
            }}
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
            onClick={() => {
              setSortArchivedEventsAsc({
                isAsc: true,
              })
              const events = orderEvents(archivedEvents, true)
              setArchivedEvents(events)
            }}
          />
        </span>
        <span style={{cursor: 'pointer', paddingLeft: '5px'}}>
          <FaArrowDown
            onClick={() => {
              setSortArchivedEventsAsc({
                isAsc: false,
              })
              const events = orderEvents(archivedEvents, false)
              setArchivedEvents(events)
            }}
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
