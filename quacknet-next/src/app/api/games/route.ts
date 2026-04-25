import sql from '@/lib/db'
import { getFeatured, getGames, getGenres } from '@/lib/game_filters'
import { Filter } from '@/types/game_filter_interface';
import { NextRequest, NextResponse } from 'next/server'


export async function GET() {
  try {
    const featured_games = await getFeatured()
    console.log('Featured games from DB:', featured_games);
    return NextResponse.json(featured_games);
  } catch (err) {
    console.error('API error:', err);
    return NextResponse.json({ error: String(err) }, { status: 500 });
  }
}


export async function POST(request: NextRequest) {
  try {
    const filter = await request.json();
    // console.log(filter.date_begin);
    // console.log("ORDER BY: ", filter.order_type)
    const games = await getGames(filter, 0, 10);
    return NextResponse.json(games);
  } catch (err) {
    console.error('API error:', err);
    return NextResponse.json({ error: String(err) }, { status: 500 });
  }
}