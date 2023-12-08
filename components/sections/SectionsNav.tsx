'use client'

import Link from 'next/link'
import {useFetch} from '@/hooks/useFetch'
import {useState, useEffect} from 'react'
import {useSearchParams} from 'next/navigation'

// not currently un use, not shared as a header
import {SectionNavItem} from '@/components/sections/SectionNavItem'

type SectionItemProps = {
  created_at: string
  id: number
  name: string
  type: string
  updated_at: string
}

const defaultResults: SectionItemProps[] = []

export function SectionsNav() {
  const searchParams = useSearchParams()
  const section_id = searchParams.get('section_id')
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

  results.map((item, index) => {
    console.log('### item, section_id', item, section_id)
  })

  return (
    <span>
      [{' '}
      {results.map((item, index) =>
        index > 0 ? (
          <span id="sections-navigation" key={item.name}>
            {' | '}
            {/*
            <SectionNavItem
              isSame={
                typeof section_id === 'string' && parseInt(section_id) === item.id
              }
              id={item.id}
              name={item.name}
              type={item.type}
            />
            */}
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
