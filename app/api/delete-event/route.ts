import {sql} from '@vercel/postgres'
import {NextResponse} from 'next/server'
export async function DELETE(request: Request) {
  try {
    const {searchParams} = new URL(request.url)
    const id = searchParams.get('id')
    const events = await sql`DELETE FROM event WHERE id=${id};`
    return NextResponse.json({events}, {status: 200})
  } catch (error) {
    return NextResponse.json({error}, {status: 500})
  }
}
