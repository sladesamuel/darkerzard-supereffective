import { Heading, Stack } from "@chakra-ui/react"
import TypeBattle from "./TypeBattle"
import AnswerOptions from "./AnswerOptions"

const QuizRound = () => (
  <Stack>
    <TypeBattle />

    <Heading textAlign="center" marginTop={8}>
      What's the effectiveness?
    </Heading>
    <AnswerOptions />
  </Stack>
)

export default QuizRound
