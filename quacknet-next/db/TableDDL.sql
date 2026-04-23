CREATE TABLE Users(
    user_id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT UNIQUE NOT NULL,
    about_me TEXT,
    profile_pic TEXT,
    crumbs INTEGER NOT NULL DEFAULT 0
);

CREATE TABLE Authentication_Manager(
    user_id INTEGER NOT NULL REFERENCES Users(user_id) ON DELETE CASCADE,
    PRIMARY KEY (user_id)
);

CREATE TABLE Local_Login(
    local_login_id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER NOT NULL UNIQUE REFERENCES Authentication_Manager(user_id) ON DELETE CASCADE,
    salthash TEXT NOT NULL
);

CREATE TABLE RIT_Login(
    rit_login_id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER NOT NULL UNIQUE REFERENCES Authentication_Manager(user_id) ON DELETE CASCADE,
    rit_uid TEXT NOT NULL UNIQUE
);

CREATE TABLE Multiplayer(
    multiplayer_id INTEGER PRIMARY KEY AUTOINCREMENT,
    local_min INTEGER NOT NULL DEFAULT 1,
    local_max INTEGER NOT NULL DEFAULT 1,
    online_multiplayer INTEGER NOT NULL DEFAULT 0
);

CREATE TABLE Game(
    game_id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT UNIQUE NOT NULL,
    author TEXT NOT NULL,
    summary TEXT NOT NULL,
    release_date TEXT NOT NULL,
    cover_image TEXT NOT NULL,
    multiplayer_id INTEGER NOT NULL DEFAULT 0
);

CREATE TABLE Saves(
    filename TEXT NOT NULL,
    user_id INTEGER NOT NULL REFERENCES Users(user_id) ON DELETE CASCADE,
    game_id INTEGER NOT NULL REFERENCES Game(game_id),
    data BLOB NOT NULL,
    save_timestamp TEXT NOT NULL,
    PRIMARY KEY (filename, user_id, game_id)
);

CREATE TABLE Plays(
    user_id INTEGER NOT NULL REFERENCES Users(user_id) ON DELETE CASCADE,
    game_id INTEGER NOT NULL REFERENCES Game(game_id),
    time_begin TEXT NOT NULL,
    time_end TEXT NOT NULL,
    PRIMARY KEY (user_id, game_id)
);

CREATE TABLE Favorites(
    user_id INTEGER NOT NULL REFERENCES Users(user_id) ON DELETE CASCADE,
    game_id INTEGER NOT NULL REFERENCES Game(game_id) ON DELETE CASCADE,
    favorite_time TEXT NOT NULL,
    PRIMARY KEY (user_id, game_id)
);

CREATE TABLE Reviews(
    user_id INTEGER NOT NULL REFERENCES Users(user_id),
    game_id INTEGER NOT NULL REFERENCES Game(game_id) ON DELETE CASCADE,
    review_time TEXT NOT NULL,
    is_liked INTEGER NOT NULL,
    PRIMARY KEY (user_id, game_id)
);

CREATE TABLE Leaderboard_Entry(
    lb_entry_id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER NOT NULL REFERENCES Users(user_id),
    game_id INTEGER NOT NULL REFERENCES Game(game_id) ON DELETE CASCADE,
    value_num REAL NOT NULL,
    value_name TEXT NOT NULL,
    lb_timestamp TEXT NOT NULL
);

CREATE TABLE Genre(
    genre_id INTEGER PRIMARY KEY AUTOINCREMENT,
    genre_name TEXT UNIQUE NOT NULL
);

CREATE TABLE Belongs_To(
    game_id INTEGER NOT NULL REFERENCES Game(game_id) ON DELETE CASCADE,
    genre_id INTEGER NOT NULL REFERENCES Genre(genre_id) ON DELETE CASCADE
);