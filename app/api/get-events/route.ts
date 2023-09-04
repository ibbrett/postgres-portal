import {sql} from '@vercel/postgres'
import {NextResponse} from 'next/server'
export async function GET(request: Request) {
  const {searchParams} = new URL(request.url)
  const complete = searchParams.get('complete')
  let events
  try {
    if (complete === null) {
      events = await sql`SELECT * FROM event ORDER BY timestamp;`
    } else {
      events =
        await sql`SELECT * FROM event WHERE complete=${complete} ORDER BY timestamp;`
    }
    return NextResponse.json(events.rows, {status: 200})
    // return NextResponse.json({events: events.rows}, {status: 200})
  } catch (error) {
    return NextResponse.json({error}, {status: 500})
  }
}
