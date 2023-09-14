import {sql} from '@vercel/postgres'
import {NextResponse} from 'next/server'
export async function GET(request: Request) {
  const {searchParams} = new URL(request.url)
  const id = searchParams.get('section_id')
  try {
    const section = await sql`SELECT * FROM section WHERE id=${id};`
    return NextResponse.json(section.rows, {status: 200})
  } catch (error) {
    return NextResponse.json({error}, {status: 500})
  }
}
