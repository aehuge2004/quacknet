import { Genre } from "@/types/genres";
import sql from "./db";
import { Game } from "@/types/games";
import { Multiplayer } from "@/types/multiplayers";
import { Game_Image } from "@/types/game_images";

export type Filter = {
    order_type?: "alphabetical" | "new releases" | "top rated" | "rising" | "popular";
    genres?: Genre[];
    single_player?: boolean;
    multiplayer?: boolean;
    online_multiplayer?: boolean;
    text_search?: string;
    date_begin?: Date;
    date_end?: Date;
}

export async function getGenres(){
    const genres = await sql<Genre[]>`select * from genre`
    return genres;
}

export async function getGames(filter: Filter, offset: number = 0, limit: number = 12){
    const new_releases_cut_off = "1 week"

    const intersect = sql`
        intersect
    `
    let statements = []
    if (filter.genres != null){
        for (const genre of filter.genres){
            const s1 = sql`select * from Game where
            game_id in (select Belongs_To.game_id
            from Genre inner join Belongs_To on (Genre.genre_id = Belongs_To.genre_id)
            where Genre.genre_name = ${ genre.genre_name })`
            statements.push(s1)
            statements.push(intersect)
        }
    }
    if (filter.date_begin != null && filter.date_end != null){
        const s2 = sql`select * from Game where ${filter.date_begin} < release_date and release_date < ${filter.date_end}`
        statements.push(s2)
        statements.push(intersect) 
    }
    if (filter.multiplayer != null){
        const s3 = sql`select Game.game_id, Game.title, Game.author, Game.summary, Game.release_date,
       Game.cover_image, Game.multiplayer_id from Game inner join Multiplayer on (Game.multiplayer_id = Multiplayer.multiplayer_id)
    where Multiplayer.local_min > 1`
        statements.push(s3)
        statements.push(intersect)
    }
    if (filter.single_player != null){
        const s4 = sql`select Game.game_id, Game.title, Game.author, Game.summary, Game.release_date,,
       Game.cover_image, Game.multiplayer_id from Game inner join Multiplayer on (Game.multiplayer_id = Multiplayer.multiplayer_id)
    where Multiplayer.local_min = 1`
        statements.push(s4)
        statements.push(intersect)
    }
    if (filter.online_multiplayer != null){
        const s5 = sql`select Game.game_id, Game.title, Game.author, Game.summary, Game.release_date,
       Game.cover_image, Game.multiplayer_id from Game inner join Multiplayer on (Game.multiplayer_id = Multiplayer.multiplayer_id)
    where Multiplayer.online_multiplayer = true`
        statements.push(s5)
        statements.push(intersect)
    }
    if (filter.text_search != null){
        const s6 = sql`select * from Game where title like '%${ filter.text_search }%' or author like '%${ filter.text_search }%' or summary like '%${ filter.text_search }%'`
        statements.push(s6)
        statements.push(intersect)
    }
    if (filter.order_type === "alphabetical"){
        const s7 = sql`select * from Game order by title asc`
        statements.push(s7)
    }
    else if (filter.order_type === "new releases"){
        const s7 = sql`select * from Game where release_date > now() - interval ${ new_releases_cut_off } order by release_date desc`
        statements.push(s7)
    }
    else if (filter.order_type === "top rated"){
        const s7 = sql`select Game.game_id, Game.title, Game.author, Game.release_date, Game.summary,
      Game.cover_image, Game.multiplayer_id, 100.0 * sum(Reviews.is_liked::int) / count(Reviews.is_liked) as rating_percentage
        from Reviews left join Game on (Game.game_id = Reviews.game_id) group by game.game_id order by rating_percentage desc`
        statements.push(s7)
    }
    else if (filter.order_type === "rising"){
        const s7 = sql`select * from Game left join
    (select this_week.game_id as plays_game_id, (coalesce(this_week.play_time, interval '0') - coalesce(last_week.play_time, interval '0')) as time_diff from
        (select game_id, sum(time_end - time_begin) as play_time from Plays
            where time_begin >= now() - interval '1 week' group by Plays.game_id) as this_week
        left join
        (select game_id, sum(time_end - time_begin) as play_time from Plays
            where time_begin >= now() - interval '2 weeks' and time_begin < now() - interval '1 week'
                group by Plays.game_id) as last_week on (this_week.game_id = last_week.game_id)) as play_diff
    on (Game.game_id = play_diff.plays_game_id)
    order by play_diff.time_diff desc`
        statements.push(s7)
    }
    else if (filter.order_type === "popular"){
        const s7 = sql`select Game.game_id, Game.title, Game.author, Game.release_date, Game.summary,
      Game.cover_image, Game.multiplayer_id, sum(Plays.time_end - Plays.time_begin) as play_time
        from Plays left join Game on (Game.game_id = Plays.game_id) group by game.game_id order by play_time desc`
        statements.push(s7)
    }
    else {
        const s7 = sql`select * from Game order by release_date desc`
        statements.push(s7)
    }

    const games = await sql<Game[]>`select * from (${statements}) limit ${ limit } offset ${ offset };`

    for (let game of games){
        game.multiplayer = (await sql<Multiplayer[]>`select * from Multiplayer where multiplayer_id = ${ game.multiplayer_id };`)?.[0]
        game.genres = await sql<Genre[]>`select * from Genre where genre_id in (select genre_id from Belongs_To where game_id = ${ game.game_id });`
        game.images = await sql<Game_Image[]>`select * from Game_Image where game_id = ${ game.game_id };`
    }
    return games
}



