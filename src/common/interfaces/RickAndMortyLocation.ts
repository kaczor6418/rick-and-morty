import { RickAndMortyCharacter } from "@/common/interfaces/RickAndMortyCharacter";

export interface RickAndMortyLocation {
  id?: string;
  name?: string;
  type?: string;
  dimension?: string;
  residents?: RickAndMortyCharacter[];
  created?: string;
}
