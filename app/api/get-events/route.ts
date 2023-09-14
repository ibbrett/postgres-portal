import {sql} from '@vercel/postgres'
import {NextResponse} from 'next/server'
import {readConfigFile} from 'typescript'
export async function GET(request: Request) {
  const {searchParams} = new URL(request.url)
  const complete = searchParams.get('complete')
  const section_id = searchParams.get('section_id')
  let events
  try {
    if (complete === null) {
      if (section_id && section_id.length) {
        events =
          await sql`SELECT * FROM event WHERE section_id=${section_id} ORDER BY timestamp;`
      } else {
        events = await sql`SELECT * FROM event ORDER BY timestamp;`
      }
    } else {
      events =
        await sql`SELECT * FROM event WHERE section_id=${section_id} AND complete=${complete} ORDER BY timestamp;`
    }
    return NextResponse.json(events.rows, {status: 200})
  } catch (error) {
    return NextResponse.json({error}, {status: 500})
  }
}
