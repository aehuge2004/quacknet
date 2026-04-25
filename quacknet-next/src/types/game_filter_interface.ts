import { Genre } from "./genres";

export type Filter = {
    order_type?: "alphabetical" | "new releases" | "top rated" | "rising" | "popular";
    genres?: Genre[];
    single_player?: boolean;
    multiplayer?: boolean;
    online_multiplayer?: boolean;
    text_search?: string;
    date_begin?: Date;
    date_end?: Date;
}