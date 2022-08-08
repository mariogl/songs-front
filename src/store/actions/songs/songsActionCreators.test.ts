import { Song } from "../../../types/interfaces";
import { loadSongsActionCreator } from "./songsActionCreators";

describe("Given a loadSongsActionCreator function", () => {
  describe("When it is called with two songs", () => {
    test("Then it should return a LoadSongsAction with the two songs", () => {
      const songs: Song[] = [
        {
          id: "1",
          title: "Song 1",
          band: "Band 1",
        },
        {
          id: "2",
          title: "Song 2",
          band: "Band 2",
        },
      ];

      const result = loadSongsActionCreator(songs);

      expect(result).toEqual({
        type: "loadSongs",
        payload: songs,
      });
    });
  });
});
