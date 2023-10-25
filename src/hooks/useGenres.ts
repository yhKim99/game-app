import genres from "../data/genres";


export interface Genre {
    id: number;
    name: string;   
    slug: string;   
    image_background: string;
}   

const useGenres = () => ({data: genres, loading: false, errors: null});

export default useGenres;