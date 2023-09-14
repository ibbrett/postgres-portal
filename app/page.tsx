'use client'

import Link from 'next/link'
import {linkStyle, headerStyle, h1Style} from '@/utils/styles'
import {FaCog, FaStickyNote} from 'react-icons/fa'
import {rowStyle, hr} from '@/utils/styles'
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

export default function Home() {
  const [results, setResults] = useState(defaultResults)
  const {fetchSections} = useFetch()
  const appTitle = process.env.NEXT_PUBLIC_APP_TITLE

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
    <>
      <header className={headerStyle}>
        <h1 className={h1Style}>{appTitle}</h1>
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
        <span className={rowStyle}>
          <Link className={linkStyle} href="/settings">
            <FaCog />
          </Link>
        </span>
      </header>
      <hr className={hr} />
    </>
  )
}
