
import useData from './useData';
import { Genre } from './useGenres';


export interface Platform {
    id: number;
    name: string;
    slug: string;
}


export interface Game {
    id: number;
    name: string;
    rating: number;
    background_image: string;
    parent_platforms: {platform : Platform}[];
    metacritic: number; 
  }
  
  const useGame = (selectedGenre: Genre | null, selectedPlatform: Platform | null) => useData<Game>("/games", {params: {
    genres: selectedGenre?.id, 
    parent_platforms: selectedPlatform?.id}}, 
    [selectedGenre?.id, selectedPlatform?.id]);

export default useGame