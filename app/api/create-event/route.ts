import {sql} from '@vercel/postgres'
import {NextResponse} from 'next/server'
export async function POST(request: Request) {
  try {
    if (request.method !== 'POST') {
      return NextResponse.json(
        {message: 'Only POST requests allowed'},
        {status: 405}
      )
    }
    const json = await request.json()
    const {section_id, timestamp, detail, summary, complete} = json.data
    const events =
      await sql`INSERT INTO event (section_id,timestamp,summary,detail,complete) VALUES (${section_id},${timestamp},${summary},${detail},${complete}) RETURNING *;`
    return NextResponse.json({events}, {status: 200})
  } catch (error) {
    return NextResponse.json({error}, {status: 500})
  }
}
