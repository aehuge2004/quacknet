-- Users
insert into Users (username, about_me, crumbs)
values
('alice', 'I love indie games', 120),
('bob', 'FPS enthusiast', 45),
('charlie', 'Casual gamer', 10),

DummyData.sql
3 KB
Forwarded
create table Users(
    user_id serial primary key,
    username varchar(150) unique not null,
    about_me varchar(500),
    profile_pic bytea,
    crumbs int not null default 0

TableDDL.sql
3 KB
riceandbeans — 8:10 PM
DATABASE_URL="postgresql://admin:password@localhost:5432/postgres"
﻿
Sadistic Biped
sadisticbiped
 
 
 
somethin' like a fever dream
Haven't slept in weeks I think I'm seeing things
Like our shadows dancing us out of our clothes
I'll be damned if you love me, damned if you don't
-- Users
insert into Users (username, about_me, crumbs)
values
('alice', 'I love indie games', 120),
('bob', 'FPS enthusiast', 45),
('charlie', 'Casual gamer', 10),
('diana', 'Speedrunner', 300);

-- Authentication_Manager
insert into Authentication_Manager (user_id)
values (1), (2), (3), (4);

-- Local_Login (users 1 & 2)
insert into Local_Login (user_id, salthash)
values
(1, repeat('a', 98)),
(2, repeat('b', 98));

-- RIT_Login (users 3 & 4)
insert into RIT_Login (user_id, rit_uid)
values
(3, repeat('c', 32)),
(4, repeat('d', 32));

-- Multiplayer configs
insert into Multiplayer (local_min, local_max, online_multiplayer)
values
(1, 4, true),
(1, 2, false);

-- Games
insert into Game (title, author, summary, release_date, cover_image, multiplayer_id)
values
('Space Blaster', 'NovaSoft', 'Arcade space shooter', now() - interval '2 years', decode('DEADBEEF', 'hex'), 2),
('Dungeon Crawler', 'DeepDev', 'Explore dark dungeons', now() - interval '1 year', decode('BEEFDEAD', 'hex'), 2),
('Speed Racer', 'FastGames', 'High-speed racing fun', now() - interval '6 months', decode('CAFEBABE', 'hex'), 1),
('Space Blaster 2', 'NovaSoft', 'Arcade space shooter but better', now() - interval '2 weeks', decode('DEADBEEF', 'hex'), 2),
('Dungeon Crawler 2', 'DeepDev', 'Explore more dark dungeons', now() - interval '1 week', decode('BEEFDEAD', 'hex'), 2),
('Speed Racer 2', 'FastGames', 'High-speed racing fun AGAIN', now() - interval '1 day', decode('CAFEBABE', 'hex'), 1);

insert into Saves (filename, user_id, game_id, data, save_timestamp)
values
('save1', 1, 1, decode('AA', 'hex'), now()),
('save2', 2, 1, decode('BB', 'hex'), now()),
('save1', 3, 2, decode('CC', 'hex'), now());

insert into Plays (user_id, game_id, time_begin, time_end)
values
(1, 1, now() - interval '2 hours', now() - interval '1 hour'),
(2, 1, now() - interval '3 hours', now() - interval '2 hours'),
(3, 2, now() - interval '1 hour', now());

insert into Favorites (user_id, game_id, favorite_time)
values
(1, 1, now()),
(2, 1, now()),
(4, 3, now());

insert into Reviews (user_id, game_id, review_time, is_liked)
values
(1, 1, now(), true),
(2, 1, now(), false),
(3, 2, now(), true);

-- Genres
insert into Genre (genre_name)
values
('Action'),
('RPG'),
('Racing');

-- Belongs_To
insert into Belongs_To (game_id, genre_id)
values
(1, 1),
(2, 2),
(3, 3),
(1, 3); -- multi-genre example