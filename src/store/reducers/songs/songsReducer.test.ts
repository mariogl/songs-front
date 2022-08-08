import { Song } from "../../../types/interfaces";
import { LoadSongsAction } from "../../types/songs";
import songsReducer from "./songsReducer";

describe("Given a songsReducer", () => {
  describe("When it receives an action of type 'loadSongs' with two songs", () => {
    test("Then it should return the two songs", () => {
      const prevSongs: Song[] = [];
      const newSongs: Song[] = [
        {
          id: "1",
          name: "Song 1",
          band: "Band 1",
        },
        {
          id: "2",
          name: "Song 2",
          band: "Band 2",
        },
      ];

      const action: LoadSongsAction = {
        type: "loadSongs",
        payload: newSongs,
      };

      const result = songsReducer(prevSongs, action);

      expect(result).toEqual(newSongs);
    });
  });

  describe("When it receives an action of unknown type", () => {
    test("Then it should return the previous state", () => {
      const prevSongs: Song[] = [];
      const action: any = {
        type: "unknown",
      };

      const result = songsReducer(prevSongs, action);

      expect(result).toEqual(prevSongs);
    });
  });
});
