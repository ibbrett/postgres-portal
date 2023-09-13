'use client'

import {useFetch} from '@/hooks/useFetch'
import {useState, useEffect} from 'react'

type TableProps = {
  table: string
}

export function Tables({table}: TableProps) {
  const [results, setResults] = useState({})
  const {fetchSections, fetchLogs, fetchEvents} = useFetch()

  useEffect(() => {
    async function doFetch() {
      let fetchResults
      if (table === 'section') {
        fetchResults = await fetchSections()
      } else if (table === 'log') {
        fetchResults = await fetchLogs()
      } else if (table === 'event') {
        fetchResults = await fetchEvents()
      }

      setResults(fetchResults)
    }
    doFetch()
  }, [])

  return (
    <>
      <h1>Table: {table}</h1>
      <pre>
        ## Data
        {JSON.stringify(results, null, 2)}
      </pre>
    </>
  )
}
