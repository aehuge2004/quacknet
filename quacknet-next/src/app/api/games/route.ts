import db from '../../../../lib/db'
import { NextResponse } from 'next/server'

export function GET() {
  const games = db.prepare('SELECT * FROM Game ORDER BY release_date DESC').all()
  return NextResponse.json(games)
}