import Link from 'next/link'
import {
  formField,
  linkStyle,
  formButtonContainer,
  formStyle,
  headerStyle,
  h1Style,
} from '@/utils/styles'

type SectionAction = (data: FormData) => void

type SectionFormProps = {
  SaveSection: SectionAction
  id: string | null
}

async function getItem(id: string) {
  const origin = process.env.NEXT_PUBLIC_ORIGIN
  const response = await fetch(`${origin}/api/get-section?section_id=${id}`, {
    cache: 'no-store',
  })
  const data = await response.json()
  return data
}

export async function SectionForm({SaveSection, id}: SectionFormProps) {
  let name = ''
  let type = ''
  let pageTitle = 'New Section'
  let selectDisabled = false

  if (id) {
    const sections = await getItem(id)
    const section = sections[0]
    name = section.name
    type = section.type
    pageTitle = 'Edit Section'
    selectDisabled = true
  }

  const types = ['log', 'blog', 'event']

  return (
    <>
      <header className={headerStyle}>
        <h1 className={h1Style}>{pageTitle}</h1>
      </header>
      <form action={SaveSection} className={formStyle}>
        <div>Name</div>{' '}
        <input
          type="text"
          name="name"
          defaultValue={name}
          className={formField}
          placeholder="Add section name here..."
        />
        <div>Type</div>{' '}
        <select
          name="type"
          defaultValue={type}
          className={formField}
          disabled={selectDisabled}
        >
          {types.map((item, index) => (
            <option key={index} value={item}>
              {item}
            </option>
          ))}
        </select>
        <div className={formButtonContainer}>
          <Link href={{pathname: '/sections'}} className={linkStyle}>
            Cancel
          </Link>
          <button type="submit" className={linkStyle}>
            Save
          </button>
        </div>
        {id && <input type="hidden" name="id" value={id} />}
      </form>
    </>
  )
}
