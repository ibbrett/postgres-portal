import {sql} from '@vercel/postgres'
import {NextResponse} from 'next/server'
export async function GET(request: Request) {
  try {
    const sections = await sql`SELECT * FROM section;`
    return NextResponse.json({sections: sections.rows}, {status: 200})
  } catch (error) {
    return NextResponse.json({error}, {status: 500})
  }
}
