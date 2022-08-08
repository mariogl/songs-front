import { render, screen } from "@testing-library/react";
import { Song } from "../../types/interfaces";
import SongsLists from "./SongsLists";

describe("Given a SongsList component", () => {
  describe("When it's rendered and it receives two songs", () => {
    test("Then it should display the two songs titles", () => {
      const mockSongs: Song[] = [
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

      render(<SongsLists songs={mockSongs} />);

      const songsTitles = screen.getAllByRole("heading");

      expect(songsTitles).toHaveLength(2);
      expect(songsTitles[0]).toHaveTextContent("Song 1");
      expect(songsTitles[1]).toHaveTextContent("Song 2");
    });
  });
});
