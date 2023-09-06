import {sql} from '@vercel/postgres'
import {NextResponse} from 'next/server'
export async function PUT(request: Request) {
  try {
    if (request.method !== 'PUT') {
      return NextResponse.json({message: 'Only PUT requests allowed'}, {status: 405})
    }
    const json = await request.json()
    const {id, section_id, timestamp, detail, summary, complete} = json.data
    const events = await sql`UPDATE event SET 
        section_id=${section_id},
        timestamp=${timestamp},
        summary=${summary},
        detail=${detail},
        complete=${complete}
        WHERE id=${id};`
    return NextResponse.json({events}, {status: 200})
  } catch (error) {
    return NextResponse.json({error}, {status: 500})
  }
}
