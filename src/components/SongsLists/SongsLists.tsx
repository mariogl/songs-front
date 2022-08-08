import { Song } from "../../types/interfaces";
import SongCard from "../SongCard/SongCard";

interface SongsListsProps {
  songs: Song[];
}

const SongsLists = ({ songs }: SongsListsProps): JSX.Element => {
  return (
    <ul className="songs">
      {songs.map((song: Song) => (
        <li key={song.id}>
          <SongCard song={song} />
        </li>
      ))}
    </ul>
  );
};

export default SongsLists;
