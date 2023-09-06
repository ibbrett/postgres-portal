import {sql} from '@vercel/postgres'
import {NextResponse} from 'next/server'
export async function GET(request: Request) {
  const {searchParams} = new URL(request.url)
  const id = searchParams.get('id')
  try {
    const event = await sql`SELECT * FROM event WHERE id=${id};`
    return NextResponse.json(event.rows, {status: 200})
  } catch (error) {
    return NextResponse.json({error}, {status: 500})
  }
}
