import Link from 'next/link'
//import {EventItem} from '@/components/events/EventItem'
//import {useFetch} from '@/hooks/useFetch'
//import {useState, useEffect} from 'react'
import {linkStyle, headerStyle, h1Style, rowStyle, hr} from '@/utils/styles'

import {BackButton} from '@/components/controls/buttons/BackButton'
import {EventLists} from '@/components/events/EventLists'
import {AppTitle} from '@/components/AppTitle'

export default function Home() {
  // if (activeEvents.length === 0 && archivedEvents.length === 0) return 'Loading...'

  return (
    <>
      <header className={headerStyle}>
        <AppTitle />
        <BackButton />
      </header>
      <hr className={hr} />

      <EventLists />
    </>
  )
}
