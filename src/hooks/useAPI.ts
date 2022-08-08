import { useCallback, useContext } from "react";
import { loadSongsActionCreator } from "../store/actions/songs/songsActionCreators";
import SongsContext from "../store/contexts/SongsContext";
import { ISongsContext } from "../store/types/songs";
import { Song } from "../types/interfaces";

const useAPI = () => {
  const { songs, songsDispatch } = useContext(SongsContext) as ISongsContext;

  const loadSongs = useCallback(async () => {
    const response = await fetch(`${process.env.REACT_APP_API_URL}songs`);
    const songsAPI: {
      songs: Song[];
    } = await response.json();

    songsDispatch(loadSongsActionCreator(songsAPI.songs));
  }, [songsDispatch]);

  return {
    songs,
    loadSongs,
  };
};

export default useAPI;
