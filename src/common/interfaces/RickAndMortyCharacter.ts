import { RickAndMortyEpisode } from "@/common/interfaces/RickAndMortyEpisode";
import { RickAndMortyLocation } from "@/common/interfaces/RickAndMortyLocation";

export interface RickAndMortyCharacter {
  id?: string;
  name?: string;
  status?: string;
  species?: string;
  type?: string;
  gender?: string;
  origin?: RickAndMortyLocation;
  location?: RickAndMortyLocation;
  image?: string;
  episode?: RickAndMortyEpisode[];
  created?: string;
}
