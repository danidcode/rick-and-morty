import {CharacterStatusName} from "../types/character-status";

export const getStatusColor = (status: CharacterStatusName) => {
  switch (status) {
    case "Alive":
      return "text-customGreen";
    case "Dead":
      return "text-customRed";
    case "unknown":
      return "text-customBlue";
  }
};
