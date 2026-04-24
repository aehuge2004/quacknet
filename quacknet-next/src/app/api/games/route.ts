import db from '@/lib/db'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const games = db.prepare('SELECT * FROM Game').all();
    console.log('Games from DB:', games);
    return NextResponse.json(games);
  } catch (err) {
    console.error('API error:', err);
    return NextResponse.json({ error: String(err) }, { status: 500 });
  }
}