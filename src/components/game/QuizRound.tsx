import { Heading, Stack } from "@chakra-ui/react"
import type PokemonType from "@/types/PokemonType"
import Effectiveness from "@/types/Effectiveness"
import TypeBattle from "./TypeBattle"
import AnswerOptions from "./AnswerOptions"

type Props = {
  playerType: PokemonType
  opponentType: PokemonType
  selectedAnswer: string | null
  onAnswerSelected: (answer: Effectiveness) => void
}

const QuizRound = ({ selectedAnswer, onAnswerSelected, ...types }: Props) => (
  <Stack>
    <TypeBattle {...types} />

    <Heading textAlign="center" marginTop={8}>
      What&apos;s the effectiveness?
    </Heading>

    <AnswerOptions selectedAnswer={selectedAnswer} onAnswerSelected={onAnswerSelected} />
  </Stack>
)

export default QuizRound
