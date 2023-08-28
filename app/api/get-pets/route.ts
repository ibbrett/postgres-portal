import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
 
export async function GET(request: Request) {

  try {
    const pets = await sql`SELECT * FROM Pets;`;
    return NextResponse.json({ pets: pets.rows }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }

}
