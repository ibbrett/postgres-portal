# Notes

## Query Param Retrieval

NextJS v13 handles the retrieval of query parameters differently for client-side and server-side components

### Query Param Retrieval - client

```js
'use client'
import {useSearchParams} from 'next/navigation' export
default function Page() {
  const searchParams = useSearchParams()
  const id = searchParams.get('id')
  ...
}
```
