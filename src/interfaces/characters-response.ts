import {Character} from "./character";

export default interface CharactersResponse {
  info: {
    count: number;
    next: string | null;
    pages: number;
    prev: string | null;
  };
  results?: Character[];
}
