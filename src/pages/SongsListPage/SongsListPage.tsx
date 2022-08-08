import { useEffect } from "react";
import SongsLists from "../../components/SongsLists/SongsLists";
import useAPI from "../../hooks/useAPI";

const SongsListPage = (): JSX.Element => {
  const { songs, loadSongs } = useAPI();

  useEffect(() => {
    loadSongs();
  }, [loadSongs]);

  return (
    <>
      <h2>Songs List</h2>
      <SongsLists songs={songs} />
    </>
  );
};

export default SongsListPage;
