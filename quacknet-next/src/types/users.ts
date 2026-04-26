export type Users = {
  user_id?: number;
  username?: string;
  about_me?: string;
  crumbs?: number;
  profile_pic?: Buffer;
  time_played?: Date;
  favorite_games?: number[];
};