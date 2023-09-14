# Notes

## Query Param Retrieval

NextJS v13 handles the retrieval of query parameters differently for client-side and server-side components

### client-side

```js
'use client'

import {useSearchParams} from 'next/navigation'

export default function Page() {
  const searchParams = useSearchParams()
  const section_id = searchParams.get('section_id')
  ...
}
```

### server-side

```js
type Props = {
  params: {}
  searchParams: {section_id: string}
}

export default function Page(props: Props) {
  const searchParams = props.searchParams
  const section_id = searchParams.section_id
  ...
}
```
