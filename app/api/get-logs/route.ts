import {sql} from '@vercel/postgres'
import {NextResponse} from 'next/server'
export async function GET(request: Request) {
  try {
    const logs = await sql`SELECT * FROM log;`
    return NextResponse.json({logs: logs.rows}, {status: 200})
  } catch (error) {
    return NextResponse.json({error}, {status: 500})
  }
}
