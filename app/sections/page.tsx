'use client'

import Link from 'next/link'
import {headerStyle, h1Style, linkStyle, hr} from '@/utils/styles'
import {FaArrowLeft} from 'react-icons/fa'
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

// hard-coded garbage
const sections = ['Job Search Log', 'Tracker Events']
export default function Page() {
  const [sections, setSections] = useState(defaultResults)
  const {fetchSections} = useFetch()
  const appTitle = process.env.NEXT_PUBLIC_APP_TITLE

  useEffect(() => {
    async function doFetch() {
      let fetchResults
      fetchResults = await fetchSections()
      setSections(fetchResults.sections)
    }
    doFetch()
  }, [])

  if (sections.length === 0) return null

  return (
    <>
      <header className={headerStyle}>
        <h1 className={h1Style}>{appTitle} Sections</h1>
        <Link href=".." className={linkStyle}>
          <FaArrowLeft />
        </Link>
      </header>

      <hr className={hr} />
      <ul>
        {sections.map((section, i) => (
          <li key={i}>
            {i + 1}) {section.name}
          </li>
        ))}
      </ul>
    </>
  )
}
