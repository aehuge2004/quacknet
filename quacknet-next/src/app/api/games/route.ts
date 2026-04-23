import db from '@/lib/db'
import { NextResponse } from 'next/server'

export async function GET() {
  const games = db.prepare('SELECT * FROM Game').all();
  console.log('Games from DB:', games); // check your VSCode terminal
  return NextResponse.json(games);
}