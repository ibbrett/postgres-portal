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
    const {name, type} = json.data
    console.log(`INSERT INTO section (name, type) VALUES (${name},${type});`)
    const events =
      await sql`INSERT INTO section (name, type) VALUES (${name},${type});`
    return NextResponse.json({events}, {status: 200})
  } catch (error) {
    return NextResponse.json({error}, {status: 500})
  }
}
