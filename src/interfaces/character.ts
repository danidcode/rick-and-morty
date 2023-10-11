import {CharacterGender} from "../types/character-gender";
import {CharacterStatusName} from "../types/character-status";
import {CharacterLocation} from "./character-location";

export interface Character {
  id: number;
  name: string;
  status: CharacterStatusName;
  species: string;
  type: string;
  gender: CharacterGender;
  location: CharacterLocation;
  image: string;
  episode: string[];
  url: string;
  created: string;
}
