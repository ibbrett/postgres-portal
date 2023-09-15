'use client'

import Link from 'next/link'
import {useFetch} from '@/hooks/useFetch'
import {useState, useEffect} from 'react'

type SectionItemProps = {
  created_at: string
  id: number
  name: string
  type: string
  updated_at: string
}

const defaultResults: SectionItemProps[] = []

export function SectionsNav() {
  const [results, setResults] = useState(defaultResults)
  const {fetchSections} = useFetch()

  useEffect(() => {
    async function doFetch() {
      let fetchResults
      fetchResults = await fetchSections()
      setResults(fetchResults.sections)
    }
    doFetch()
  }, [])

  if (results.length === 0) return null

  return (
    <span>
      [{' '}
      {results.map((item, index) =>
        index > 0 ? (
          <span key={item.name}>
            {' | '}
            <Link
              href={{
                pathname: '/sections/' + item.type,
                query: {section_id: item.id},
              }}
            >
              {item.name}
            </Link>
          </span>
        ) : (
          <Link
            key={item.name}
            href={{
              pathname: '/sections/' + item.type,
              query: {section_id: item.id},
            }}
          >
            {item.name}
          </Link>
        )
      )}{' '}
      ]
    </span>
  )
}
