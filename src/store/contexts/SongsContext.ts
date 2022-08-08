import { createContext } from "react";
import { ISongsContext } from "../types/interfaces";

const SongsContext = createContext<ISongsContext | null>(null);

export default SongsContext;
