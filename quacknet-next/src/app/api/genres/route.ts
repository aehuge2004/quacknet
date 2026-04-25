import sql from '@/lib/db'
import { getGames, getGenres } from '@/lib/game_filters'
import { Filter } from '@/types/game_filter_interface';
import { NextRequest, NextResponse } from 'next/server'


export async function GET() {
  try {
    const genres = await getGenres()
    return NextResponse.json(genres);
  } catch (err) {
    console.error('API error:', err);
    return NextResponse.json({ error: String(err) }, { status: 500 });
  }
}