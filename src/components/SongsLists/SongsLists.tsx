import { Song } from "../../types/interfaces";

interface SongsListsProps {
  songs: Song[];
}

const SongsLists = ({ songs }: SongsListsProps): JSX.Element => {
  return (
    <ul className="songs">
      {songs.map((song: Song) => (
        <li key={song.id}>
          <span>{song.title}</span>
        </li>
      ))}
    </ul>
  );
};

export default SongsLists;
