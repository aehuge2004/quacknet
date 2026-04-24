import sql from '@/lib/db'
import { getGames, getGenres } from '@/lib/game_filters'
import { Filter } from '@/types/game_filter_interface';
import { NextRequest, NextResponse } from 'next/server'


// export async function GET() {
//   try {
//     // const games = await sql`SELECT * FROM "game"`;
//     const genres = await getGenres()
//     console.log(genres[0])
//     const filter: Filter = {
//       order_type: "new releases",
//     }
//     const games = await getGames(filter, 0, 10);
//     console.log('Games from DB:', games);
//     return NextResponse.json(games);
//   } catch (err) {
//     console.error('API error:', err);
//     return NextResponse.json({ error: String(err) }, { status: 500 });
//   }
// }


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