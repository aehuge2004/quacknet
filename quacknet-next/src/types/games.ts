import { Game_Image } from "./game_images";
import { Genre } from "./genres";
import { Multiplayer } from "./multiplayers";

export type Game = {
  id: number;
  title: string;
  author: string;
  summary: string;
  release_date: string;
  cover_image: string;  // now a path like "/images/space-blaster.jpg"
  multiplayer: Multiplayer;
  genres: Genre[];
  images: Game_Image[];
};