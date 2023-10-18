import { useEffect, useState } from "react";
import appClients from "../services/app-clients";
import { Text } from "@chakra-ui/react";

interface Game {
  id: number;
  name: string;
  rating: number;
}

interface FetchGameResponse {
  count: number;
  results: Game[];
}

const GameGrid = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [errors, setErrors] = useState("");

  useEffect(() => {
    appClients
      .get<FetchGameResponse>("/xgames")
      .then((res) => setGames(res.data.results))
      .catch((err) => setErrors(err.message));
  }, []);

  return (
    <>
      {errors && <Text>{errors}</Text>}
      <ul>
        {games.map((games) => (
          <li key={games.id}>{games.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GameGrid;
