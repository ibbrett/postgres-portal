'use client'

import Link from 'next/link'
import {EventItem} from '@/components/EventItem'
import {useFetch} from '@/hooks/useFetch'
import {useState, useEffect} from 'react'
import {FaArrowUp, FaArrowDown} from 'react-icons/fa'
import {
  linkStyle,
  ulStyle,
  headerStyle,
  h1Style,
  rowStyle,
  inlineMarginSpace,
} from '../../utils/styles'

function deleteItem(id: number) {
  console.log('deleteItem', id)
}

/*
async function deleteItem(id: string) {
 "use server"
  await prisma.event.delete({where: {id}});
  redirect("/");
}
*/

type IsReadyProp = {
  isReady: boolean
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
  const [eventsReady, setEventsReady] = useState<IsReadyProp>({isReady: false})
  const {fetchActiveEvents, fetchArchivedEvents} = useFetch()

  function orderEvents(
    events: eventProp[],
    setEvents: <eventProp>([]) => void,
    asc: boolean
  ) {
    console.log(`Order Events ${asc ? 'ascending' : 'descending'}`)

    console.log(events)
    const eventsClone = [...events]
    if (asc === true) eventsClone.sort((a, b) => a.timestamp - b.timestamp)
    else eventsClone.sort((a, b) => b.timestamp - a.timestamp)
    console.log(eventsClone)
    setEvents(eventsClone)
  }

  async function doFetch() {
    const activeEvents = await fetchActiveEvents()
    const archivedEvents = await fetchArchivedEvents()
    setActiveEvents(activeEvents)
    setArchivedEvents(archivedEvents)

    if (activeEvents.events) {
      console.log('we have events')
    } else {
      console.log('we DO NOT have events')
    }

    setEventsReady({isReady: true})
  }

  useEffect(() => {
    if (eventsReady.isReady === false) {
      doFetch()
    }
  }, [eventsReady.isReady])

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
            setEventsReady={setEventsReady}
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
            setEventsReady={setEventsReady}
          />
        ))}
      </ul>
    </>
  )
}
