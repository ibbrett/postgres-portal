'use client'

import Link from 'next/link'
import {
  linkStyle,
  ulStyle,
  headerStyle,
  h1Style,
  rowStyle,
  sectionHeader,
  hr,
} from '@/utils/styles'
import {FaArrowLeft} from 'react-icons/fa'
import {Loading} from '@/components/controls/Loading'
import {useState, useEffect} from 'react'
import {useSearchParams} from 'next/navigation'
import {useFetch} from '@/hooks/useFetch'

export default function Log() {
  // get section_id param using client-side query params method
  const searchParams = useSearchParams()
  const section_id = searchParams.get('section_id')

  // section state
  const {fetchSection} = useFetch()
  const [sectionName, setSectionName] = useState('Under Construction')

  // set state for logs fetched - used by loading/spinner indicator
  const [logsFetched, setLogsFetched] = useState(false)

  async function doFetch() {
    // get section info
    const eventSection = await fetchSection(section_id)
    setSectionName(eventSection.section.name)

    setLogsFetched(true)
  }

  useEffect(() => {
    doFetch()
  }, [])

  return (
    <>
      <header className={headerStyle}>
        <h1 className={h1Style}>{sectionName} logs</h1>
        <span className={rowStyle}>
          <Link href=".." className={linkStyle} style={{padding: '8px'}}>
            <FaArrowLeft />
          </Link>
          <Link
            className={linkStyle}
            href={{
              pathname: '/sections/log/new',
              query: {section_id: section_id},
            }}
          >
            New Log
          </Link>
        </span>
      </header>

      <hr className={hr} />

      {!logsFetched ? (
        <Loading
          msg="Fetching Logs ..."
          margin="100px"
          spinnerColor="fill-blue-600"
        />
      ) : (
        <h1>Nothing to see here yet</h1>
      )}
    </>
  )
}
