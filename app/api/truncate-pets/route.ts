import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
 
export async function GET(request: Request) {

  try {
    await sql`TRUNCATE TABLE pets;`;
    const pets = await sql`SELECT * FROM pets;`;
    return NextResponse.json({ pets: pets.rows }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }

}
