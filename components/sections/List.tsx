'use client'

import Link from 'next/link'
import {headerStyle, h1Style, linkStyle} from '@/utils/styles'
import {FaPlus} from 'react-icons/fa'
import {useFetch} from '@/hooks/useFetch'
import {useState, useEffect} from 'react'
import {Loading} from '@/components/controls/Loading'
import {SectionItem} from './SectionItem'

type SectionItemProps = {
  created_at: string
  id: number
  name: string
  type: string
  updated_at: string
}

const defaultResults: SectionItemProps[] = []

export function List() {
  const [sections, setSections] = useState(defaultResults)
  const {fetchSections} = useFetch()

  useEffect(() => {
    async function doFetch() {
      let fetchResults
      fetchResults = await fetchSections()
      setSections(fetchResults.sections)
    }
    doFetch()
  }, [])

  function deleteSection(id: number) {
    const filtered = sections.filter(item => item.id !== id)
    setSections(filtered)
  }

  return (
    <>
      <header className={headerStyle}>
        <h1 className={h1Style}>Section List</h1>
        <Link
          className={linkStyle}
          href={{
            pathname: '/sections/new',
          }}
        >
          <FaPlus />
        </Link>
      </header>

      {sections.length === 0 ? (
        <Loading
          msg="Fetching Sections ..."
          margin="100px"
          spinnerColor="fill-yellow-600"
        />
      ) : (
        <ul>
          {/*
          {sections.map((section, i) => (
            <li key={i}>
              {i + 1}) {section.name}
            </li>
          ))}
          */}
          {sections.map((section, i) => (
            <SectionItem
              key={section.id}
              {...section}
              deleteSection={deleteSection}
            />
          ))}
        </ul>
      )}
    </>
  )
}
