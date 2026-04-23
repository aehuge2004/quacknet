export type Users = {
  user_id: number;
  username: string;
  about_me: string;
  crumbs: number;
  profile_pic: string;  // now a path like "/images/space-blaster.jpg"\
  time_played: Date;
  favorite_games: number[];
};