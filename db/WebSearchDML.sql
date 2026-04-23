--popularity: all games, sorted by time played
select Game.game_id, Game.title, Game.author, Game.release_date, Game.summary,
       Game.cover_image, Game.multiplayer_id, sum(Plays.time_end - Plays.time_begin) as play_time
        from Plays left join Game on (Game.game_id = Plays.game_id) group by game.game_id order by play_time desc;

--rising: all games, sorted by large increase in play time within the last week
select * from Game left join
    (select this_week.game_id as plays_game_id, (coalesce(this_week.play_time, interval '0') - coalesce(last_week.play_time, interval '0')) as time_diff from
        (select game_id, sum(time_end - time_begin) as play_time from Plays
            where time_begin >= now() - interval '1 week' group by Plays.game_id) as this_week
        left join
        (select game_id, sum(time_end - time_begin) as play_time from Plays
            where time_begin >= now() - interval '2 weeks' and time_begin < now() - interval '1 week'
                group by Plays.game_id) as last_week on (this_week.game_id = last_week.game_id)) as play_diff
    on (Game.game_id = play_diff.plays_game_id)
    order by play_diff.time_diff desc;


--top rated: all games, sorted by ratings
select Game.game_id, Game.title, Game.author, Game.release_date, Game.summary,
       Game.cover_image, Game.multiplayer_id, 100.0 * sum(Reviews.is_liked::int) / count(Reviews.is_liked) as rating_percentage
        from Reviews left join Game on (Game.game_id = Reviews.game_id) group by game.game_id order by rating_percentage desc;


--new releases: sorted by most recent game added, cutoff determined by input
select * from Game where release_date > now() - interval '[query]' order by release_date desc;

--alphabetical: all games, sorted alphabetically
select * from Game order by title asc;

--search: game name, blurb, author
select * from Game where title like '%[query]%' or author like '%[query]%' or summary like '%[query]%';

--select bar: genre, multiplayer options either joined or intersected with the other queries
--genre
select * from Game where
    game_id in (select Belongs_To.game_id
        from Genre inner join Belongs_To on (Genre.genre_id = Belongs_To.genre_id)
          where Genre.genre_name like '%[query]%');

--online multiplayer
select * from Game inner join Multiplayer on (Game.multiplayer_id = Multiplayer.multiplayer_id)
    where Multiplayer.online_multiplayer = true;

--multiplayer
select * from Game inner join Multiplayer on (Game.multiplayer_id = Multiplayer.multiplayer_id)
    where Multiplayer.local_max > 1;

--singleplayer
select * from Game inner join Multiplayer on (Game.multiplayer_id = Multiplayer.multiplayer_id)
    where Multiplayer.local_min = 1;

--date range
select * from Game where '[query]' < release_date and release_date < '[query2]';

-- later, join on intersect and append: limit n offset k