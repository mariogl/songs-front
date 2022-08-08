import { Song } from "../../../types/interfaces";
import { Action, LoadSongsAction } from "../../types/songs";

const songsReducer = (previousSongs: Song[], action: Action): Song[] => {
  let newSongs: Song[];

  switch (action.type) {
    case "loadSongs":
      newSongs = [...(action as LoadSongsAction).payload];
      break;
    default:
      newSongs = [...previousSongs];
  }

  return newSongs;
};

export default songsReducer;
