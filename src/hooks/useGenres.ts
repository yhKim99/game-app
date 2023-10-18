import { CanceledError } from "axios";
import { useEffect, useState } from "react";
import appClients from "../services/app-clients";


interface Genre {
    id: number;
    name: string;
    slug: string;
}

interface FetchGenreResponse {
    count: number;
    results: Genre[];
}

const useGenres = () => {
    const [genres, setGenres] = useState<Genre[]>([]);
    const [errors, setErrors] = useState("");
    const [loading, setLoading] = useState(false);
  
    useEffect(() => {

    const controller = new AbortController();

        setLoading(true);
      appClients
        .get<FetchGenreResponse>("/genres", {signal: controller.signal})
        .then((res) => {
            setGenres(res.data.results);
            setLoading(false);
        })
        .catch((err) => {
            if (err instanceof CanceledError) return;
            setErrors(err.message);
            setLoading(false);
        });

        return () => controller.abort();

    }, []);

  return {genres, errors, loading};
}

export default useGenres