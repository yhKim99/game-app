import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}

const CriticsScore = ({ score }: Props) => {
  return (
    <Badge
      variant="outline"
      colorScheme={score > 80 ? "green" : "yellow"}
      borderRadius="10"
    >
      {score}
    </Badge>
  );
};

export default CriticsScore;
