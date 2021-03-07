import { RickAndMortyCharacter } from "@/common/interfaces/RickAndMortyCharacter";

export interface RickAndMortyEpisode {
  id?: string;
  name?: string;
  air_date?: string;
  episode?: string;
  characters?: RickAndMortyCharacter[];
  created?: string;
}
