-- Users
INSERT INTO Users (username, about_me, crumbs)
VALUES
('alice', 'I love indie games', 120),
('bob', 'FPS enthusiast', 45),
('charlie', 'Casual gamer', 10),
('diana', 'Speedrunner', 300);

-- Authentication_Manager
INSERT INTO Authentication_Manager (user_id)
VALUES (1), (2), (3), (4);

-- Local_Login (users 1 & 2)
INSERT INTO Local_Login (user_id, salthash)
VALUES
(1, replace(hex(zeroblob(49)), '00', 'aa')),
(2, replace(hex(zeroblob(49)), '00', 'bb'));

-- RIT_Login (users 3 & 4)
INSERT INTO RIT_Login (user_id, rit_uid)
VALUES
(3, replace(hex(zeroblob(16)), '00', 'cc')),
(4, replace(hex(zeroblob(16)), '00', 'dd'));

-- Multiplayer configs
INSERT INTO Multiplayer (local_min, local_max, online_multiplayer)
VALUES
(1, 4, 1),
(1, 2, 0);

-- Games
INSERT INTO Game (title, author, summary, release_date, cover_image, multiplayer_id)
VALUES
('Space Blaster', 'NovaSoft', 'Arcade space shooter', date('now', '-2 years'), 'images/long-way-duck-gameplay.png', 2),
('Dungeon Crawler', 'DeepDev', 'Explore dark dungeons', date('now', '-1 year'), 'images/hitbox.png', 2),
('Speed Racer', 'FastGames', 'High-speed racing fun', date('now', '-6 months'), 'images/quack-attack.png', 1),
('Space Blaster 2', 'NovaSoft', 'Arcade space shooter but better', date('now', '-14 days'), 'images/long-way-duck.png', 2),
('Dungeon Crawler 2', 'DeepDev', 'Explore more dark dungeons', date('now', '-7 days'), 'images/pond-invadors.png', 2),
('Speed Racer 2', 'FastGames', 'High-speed racing fun AGAIN', date('now', '-1 day'), 'images/quack-attack.png', 1);

-- Saves
INSERT INTO Saves (filename, user_id, game_id, data, save_timestamp)
VALUES
('save1', 1, 1, X'AA', datetime('now')),
('save2', 2, 1, X'BB', datetime('now')),
('save1', 3, 2, X'CC', datetime('now'));

-- Plays
INSERT INTO Plays (user_id, game_id, time_begin, time_end)
VALUES
(1, 1, datetime('now', '-2 hours'), datetime('now', '-1 hour')),
(2, 1, datetime('now', '-3 hours'), datetime('now', '-2 hours')),
(3, 2, datetime('now', '-1 hour'), datetime('now'));

-- Favorites
INSERT INTO Favorites (user_id, game_id, favorite_time)
VALUES
(1, 1, datetime('now')),
(2, 1, datetime('now')),
(4, 3, datetime('now'));

-- Reviews
INSERT INTO Reviews (user_id, game_id, review_time, is_liked)
VALUES
(1, 1, datetime('now'), 1),
(2, 1, datetime('now'), 0),
(3, 2, datetime('now'), 1);

-- Genres
INSERT INTO Genre (genre_name)
VALUES
('Action'),
('RPG'),
('Racing');

-- Belongs_To
INSERT INTO Belongs_To (game_id, genre_id)
VALUES
(1, 1),
(2, 2),
(3, 3),
(1, 3);