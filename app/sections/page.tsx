import {Tables} from '@/components/Tables'

export default function Page() {
  return (
    <>
      <h1>Database Tables</h1>
      <Tables table="section" />
      <Tables table="log" />
      <Tables table="event" />
    </>
  )
}
