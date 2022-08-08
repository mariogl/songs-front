import { Song } from "../../types/interfaces";

interface SongProps {
  song: Song;
}

const SongCard = ({ song: { name } }: SongProps): JSX.Element => {
  return (
    <article className="song">
      <h3 className="song__title">{name}</h3>
    </article>
  );
};

export default SongCard;
