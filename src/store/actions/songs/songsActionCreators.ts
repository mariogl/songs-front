import { Song } from "../../../types/interfaces";
import { LoadSongsAction } from "../../types/songs";

export const loadSongsActionCreator = (songs: Song[]): LoadSongsAction => ({
  type: "loadSongs",
  payload: songs,
});
