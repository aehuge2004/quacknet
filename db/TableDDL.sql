create table Users(
    user_id serial primary key,
    username varchar(150) unique not null,
    about_me varchar(500),
    profile_pic bytea,
    crumbs int not null default 0
);

create table Authentication_Manager(
    user_id int not null references Users(user_id) on delete cascade,
    primary key (user_id)
);

create table Local_Login(
    local_login_id serial primary key,
    user_id int not null unique references Authentication_Manager(user_id) on delete cascade,
    salthash char(98) not null
);

create table RIT_Login(
    rit_login_id serial primary key,
    user_id int not null unique references Authentication_Manager(user_id) on delete cascade,
    rit_uid char(32) not null unique
);

create table Game(
    game_id serial primary key,
    title varchar(250) unique not null,
    author varchar(150) not null,
    summary varchar(500) not null,
    release_date timestamptz not null,
    cover_image bytea not null,
    multiplayer_id boolean not null default false
);

create table Multiplayer(
    multiplayer_id serial primary key,
    local_min int not null default 1,
    local_max int not null default 1,
    online_multiplayer boolean not null default false
);

create table Saves(
    filename varchar(200) not null,
    user_id int not null references Users(user_id) on delete cascade,
    game_id int not null references Game(game_id),
    data bytea not null,
    save_timestamp timestamptz not null,
    primary key (filename, user_id, game_id)
);

create table Plays(
    user_id int not null references Users(user_id) on delete cascade,
    game_id int not null references Game(game_id),
    time_begin timestamptz not null,
    time_end timestamptz not null,
    primary key (user_id, game_id)
);

create table Favorites(
    user_id int not null references Users(user_id) on delete cascade,
    game_id int not null references Game(game_id) on delete cascade,
    favorite_time timestamptz not null,
    primary key (user_id, game_id)
);

create table Reviews(
    user_id int not null references Users(user_id),
    game_id int not null references Game(game_id) on delete cascade,
    review_time timestamptz not null,
    is_liked boolean not null,
    primary key (user_id, game_id)
);

create table Leaderboard_Entry(
    lb_entry_id serial primary key,
    user_id int not null references Users(user_id),
    game_id int not null references Game(game_id) on delete cascade,
    value_num double precision not null,
    value_name varchar(150) not null,
    lb_timestamp timestamptz not null
);

create table Genre(
    genre_id serial primary key,
    genre_name varchar(100) unique not null
);

create table Belongs_To(
    game_id int not null references Game(game_id) on delete cascade,
    genre_id int not null references Genre(genre_id) on delete cascade
);