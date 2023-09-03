'use client'

import Link from 'next/link'
import {EventItem} from '@/components/EventItem'
import {useFetch} from '@/hooks/useFetch'
import {useState, useEffect} from 'react'

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
  //const {UpdateEvent} = useData()

  const defaultEventsState: eventProp[] = []
  const [activeEvents, setActiveEvents] = useState(defaultEventsState)
  const [archivedEvents, setArchivedEvents] = useState(defaultEventsState)
  const [eventsReady, setEventsReady] = useState<IsReadyProp>({isReady: false})
  const {fetchActiveEvents, fetchArchivedEvents} = useFetch()

  /*
  let results = await fetchActiveEvents()
  setActiveEvents(results)
  results = await fetchArchivedEvents()
  setArchivedEvents(archivedEvents)
*/
  async function doFetch() {
    const activeEvents = await fetchActiveEvents()
    const archivedEvents = await fetchArchivedEvents()
    // if(activeEvents.events)
    setActiveEvents(activeEvents)
    setArchivedEvents(archivedEvents)
    //setEventsReady(true)

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

  //const activeEvents = await getActiveEvents()
  //const archivedEvents = await getArchivedEvents()
  // await prisma.event.create({data:{title:'Get The Funk Out'}})

  //if (!eventsReady) return null

  return (
    <>
      <header className="flex justify-between mb-4 items-center">
        <h1 className="text-2xl">Events</h1>
        <Link
          className="border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none"
          href="/tracker-events/new"
        >
          New
        </Link>
      </header>

      <h2>Active Events</h2>
      {/* <pre>{JSON.stringify(activeEvents)}</pre> */}

      <ul className="pl-1">
        {activeEvents.map(event => (
          <EventItem
            key={event.id}
            {...event}
            deleteItem={deleteItem}
            setEventsReady={setEventsReady}
          />
        ))}
      </ul>

      <h2>Archived Events</h2>
      <ul className="pl-1">
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
