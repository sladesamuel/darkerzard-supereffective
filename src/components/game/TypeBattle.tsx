import { Heading, HStack } from "@chakra-ui/react"
import SingleType from "./SingleType"
import PokemonType from "@/types/PokemonType"

type Props = {
  playerType: PokemonType
  opponentType: PokemonType
}

const TypeBattle = ({ playerType, opponentType }: Props) => (
  <HStack align="center" justifyContent="center">
    <SingleType type={playerType} />

    <Heading>
      vs
    </Heading>

    <SingleType type={opponentType} />
  </HStack>
)

export default TypeBattle
