'use client'

import {Loading} from '@/components/controls/Loading'
import {useFetch} from '@/hooks/useFetch'
import {useState, useEffect} from 'react'
import {SectionItem} from './SectionItem'

type SectionItemProps = {
  created_at: string
  id: number
  name: string
  type: string
  updated_at: string
}
const defaultResults: SectionItemProps[] = []

export function SectionItems() {
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
