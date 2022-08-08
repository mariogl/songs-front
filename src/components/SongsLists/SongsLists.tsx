import { Song } from "../../types/interfaces";

interface SongsListsProps {
  songs: Song[];
}

const SongsLists = ({ songs }: SongsListsProps): JSX.Element => {
  return (
    <ul className="songs">
      {songs.map((song: Song) => (
        <li className="song" key={song.id}>
          <h2 className="song__title">{song.title}</h2>
        </li>
      ))}
    </ul>
  );
};

export default SongsLists;
