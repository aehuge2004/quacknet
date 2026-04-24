import sql from '@/lib/db'
import { Filter, getGames, getGenres } from '@/lib/game_filters'
import { NextResponse } from 'next/server'


export async function GET() {
  try {
    // const games = await sql`SELECT * FROM "game"`;
    const genres = await getGenres()
    console.log(genres[0])
    const filter: Filter = {
      order_type: "alphabetical",
      online_multiplayer: true,
    }
    const games = await getGames(filter, 0, 10);
    console.log('Games from DB:', games);
    return NextResponse.json(games);
  } catch (err) {
    console.error('API error:', err);
    return NextResponse.json({ error: String(err) }, { status: 500 });
  }
}