import {sql} from '@vercel/postgres'
import {NextResponse} from 'next/server'
export async function GET(request: Request) {
  const {searchParams} = new URL(request.url)
  const section_id = searchParams.get('section_id')
  try {
    const sections = await sql`SELECT * FROM section WHERE id=${section_id};`
    if (sections.rows.length !== 1) {
      throw new Error('Section not found')
    }
    return NextResponse.json({section: sections.rows[0]}, {status: 200})
  } catch (error) {
    return NextResponse.json({error}, {status: 500})
  }
}
