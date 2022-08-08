import { createContext } from "react";
import { ISongsContext } from "../types/songs";

const SongsContext = createContext<ISongsContext | null>(null);

export default SongsContext;
