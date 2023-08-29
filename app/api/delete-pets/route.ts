import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
 
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const petId = searchParams.get('petId');
 
  try {
    if (!petId) throw new Error('Pet id required');
    await sql`DELETE FROM pets WHERE id=${petId};`;
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
 
  const pets = await sql`SELECT * FROM pets;`;
  return NextResponse.json({ pets }, { status: 200 });
}
