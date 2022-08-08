import { useReducer } from "react";
import songsReducer from "../reducers/songs/songsReducer";
import SongsContext from "./SongsContext";

interface SongsContextProviderProps {
  children: JSX.Element | JSX.Element[];
}

const SongsContextProvider = ({
  children,
}: SongsContextProviderProps): JSX.Element => {
  const [songs, dispatch] = useReducer(songsReducer, []);

  return (
    <SongsContext.Provider value={{ songs, songsDispatch: dispatch }}>
      {children}
    </SongsContext.Provider>
  );
};

export default SongsContextProvider;
