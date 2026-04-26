import { Game_Image } from "./game_images";
import { Genre } from "./genres";
import { Multiplayer } from "./multiplayers";

export type Game = {
  game_id: number;
  title: string;
  author: string;
  summary: string;
  release_date: string;
  cover_image: Buffer;
  multiplayer_id: number;
  multiplayer?: Multiplayer;
  genres?: Genre[];
  images?: Game_Image[];
};