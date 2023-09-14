import {sql} from '@vercel/postgres'
import {NextResponse} from 'next/server'
export async function PUT(request: Request) {
  try {
    if (request.method !== 'PUT') {
      return NextResponse.json({message: 'Only PUT requests allowed'}, {status: 405})
    }
    const json = await request.json()
    const {id, name, type} = json.data
    const sections = await sql`UPDATE section SET 
        name=${name},
        type=${type}
        WHERE id=${id};`
    return NextResponse.json({sections}, {status: 200})
  } catch (error) {
    return NextResponse.json({error}, {status: 500})
  }
}
