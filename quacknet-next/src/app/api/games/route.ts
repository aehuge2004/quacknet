import db from '../../../../lib/db'
import { NextResponse } from 'next/server'

export function GET() {
  const games = db.prepare('SELECT * FROM Game').all() as Game[];
  return NextResponse.json(games);
}