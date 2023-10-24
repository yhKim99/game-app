
import { GameQuery } from '../App';
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
  
  const useGame = (gameQuery: GameQuery) => useData<Game>("/games", {params: {
    genres: gameQuery.genre?.id, 
    parent_platforms: gameQuery.platform?.id,
    ordering: gameQuery.sortedOrder,
    search: gameQuery.searchGame}}, 
    [gameQuery]);

export default useGame