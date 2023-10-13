import {createContext} from "react";
import {Character} from "../interfaces/character";

export default createContext<{
  value: Character | null;
  setter: React.Dispatch<React.SetStateAction<Character | null>>;
}>({value: null, setter: () => null});
