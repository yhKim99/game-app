import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}

const CriticsScore = ({ score }: Props) => {
  return (
    <Badge variant="outline" colorScheme={score > 80 ? "green" : "yellow"}>
      {score}
    </Badge>
  );
};

export default CriticsScore;
