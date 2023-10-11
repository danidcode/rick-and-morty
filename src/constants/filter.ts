import {
  CharacterStatusKey,
  CharacterStatusName,
} from "../types/character-status";

export const statusFilters: {
  key: CharacterStatusKey | string;
  name: CharacterStatusName | string;
}[] = [
  {
    key: "",
    name: "All",
  },
  {
    key: "alive",
    name: "Alive",
  },
  {
    key: "dead",
    name: "Dead",
  },
  {
    key: "unknown",
    name: "Unknown",
  },
];
