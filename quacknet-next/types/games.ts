export type Game = {
  id: number;
  title: string;
  author: string;
  summary: string;
  release_date: string;
  cover_image: string;  // now a path like "/images/space-blaster.jpg"
  multiplayer_id: number;
};