import {FaArrowUp, FaArrowDown} from 'react-icons/fa'

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

type EventSortProps = {
  setSortAsc: ({}: IsAscProp) => void
  setEvents: (events: eventProp[]) => void
  orderEvents: (events: eventProp[], {}: IsAscProp) => eventProp[]
  events: eventProp[]
}

export function EventSortTrigger({
  setSortAsc,
  setEvents,
  orderEvents,
  events,
}: EventSortProps) {
  return (
    <>
      <span style={{cursor: 'pointer', paddingLeft: '5px'}}>
        <FaArrowUp
          onClick={() => {
            setSortAsc({
              isAsc: true,
            })
            const orderedEvents = orderEvents(events, {isAsc: true})
            setEvents(orderedEvents)
          }}
        />
      </span>
      <span style={{cursor: 'pointer', paddingLeft: '5px'}}>
        <FaArrowDown
          onClick={() => {
            setSortAsc({
              isAsc: false,
            })
            const orderedEvents = orderEvents(events, {isAsc: false})
            setEvents(orderedEvents)
          }}
        />
      </span>
    </>
  )
}
