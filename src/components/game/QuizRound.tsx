import { Heading, Stack } from "@chakra-ui/react"
import TypeBattle from "./TypeBattle"
import AnswerOptions from "./AnswerOptions"
import PokemonType from "@/types/PokemonType"

type Props = {
  playerType: PokemonType
  opponentType: PokemonType
}

const QuizRound = ({ playerType, opponentType }: Props) => (
  <Stack>
    <TypeBattle playerType={playerType} opponentType={opponentType} />

    <Heading textAlign="center" marginTop={8}>
      What's the effectiveness?
    </Heading>

    <AnswerOptions />
  </Stack>
)

export default QuizRound
