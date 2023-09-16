import Link from 'next/link'

import {sectionLink, sectionLabel} from '@/utils/styles'

type SectionNavItemProps = {
  isSame: boolean
  id: number
  name: string
  type: string
}
export function SectionNavItem({isSame, id, name, type}: SectionNavItemProps) {
  return isSame ? (
    <span className={sectionLabel}>{name}</span>
  ) : (
    <Link
      className={sectionLink}
      href={{
        pathname: '/sections/' + type,
        query: {section_id: id},
      }}
    >
      {name}
    </Link>
  )
}
