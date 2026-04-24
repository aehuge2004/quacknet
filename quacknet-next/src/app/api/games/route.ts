import postgres from 'postgres'
import { NextResponse } from 'next/server'

const sql = postgres(process.env.DATABASE_URL!)

export async function GET() {
  try {
    const games = await sql`SELECT * FROM "Game"`;
    console.log('Games from DB:', games);
    return NextResponse.json(games);
  } catch (err) {
    console.error('API error:', err);
    return NextResponse.json({ error: String(err) }, { status: 500 });
  }
}