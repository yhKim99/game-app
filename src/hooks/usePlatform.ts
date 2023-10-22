import useData from "./useData";


export interface Platform {
    id: number;
    slug: string;
    name: string;
}


const usePlatform = () => useData<Platform>("/platforms/lists/parents");

export default usePlatform