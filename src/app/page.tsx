import QuizRound from "@/components/game/QuizRound"
import PokemonType from "@/types/PokemonType"
import { Container, Image, Stack } from "@chakra-ui/react"

type GameRound = {
  playerType: PokemonType
  opponentType: PokemonType
}

const getNextRound = (): GameRound => {
  // This function should return the next game round.
  // For now, we will return a hardcoded example.
  return {
    playerType: "fire",
    opponentType: "water"
  }
}

const Home = () => {
  const gameRound = getNextRound()

  return (
    <Container centerContent>
      <Stack>
        <Image
          className="object-contain w-full h-auto"
          src="/logo.png"
          alt="Darkerzard Super Effective!"
          fit="fill"
          maxHeight={300}
          aspectRatio={1024 / 700}
        />

        <QuizRound {...gameRound} />
      </Stack>
    </Container>
  )
}

export default Home
