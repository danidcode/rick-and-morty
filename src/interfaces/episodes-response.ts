import { Episode } from "./episode";

export default interface EpisodesResponse {
  info: {
    count: number;
    next: string | null;
    pages: number;
    prev: string | null;
  };
  results?: Episode[];
}
