import { render, screen } from "@testing-library/react";
import { Song } from "../../types/interfaces";
import SongCard from "./SongCard";

describe("Given a SongCard component", () => {
  describe("When it receives a song", () => {
    test("Then it should display the song's name in a heading", () => {
      const song: Song = {
        id: "id",
        name: "Song name",
        band: "Band name",
      };

      render(<SongCard song={song} />);

      const title = screen.getByRole("heading");

      expect(title).toHaveTextContent(song.name);
    });
  });
});
