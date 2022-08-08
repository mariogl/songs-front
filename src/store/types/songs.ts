import { Dispatch } from "react";
import { Song } from "../../types/interfaces";

export interface ISongsContext {
  songs: Song[];
  songsDispatch: Dispatch<Action>;
}

export type songsActionTypes = "loadSongs";

export interface Action {
  type: songsActionTypes;
}

export interface LoadSongsAction extends Action {
  payload: Song[];
}
