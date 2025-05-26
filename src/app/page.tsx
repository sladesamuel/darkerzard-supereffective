import { Container, Image, Stack } from "@chakra-ui/react"
import Game from "@/components/game/Game"

const Home = () => (
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

      <Game />
    </Stack>
  </Container>
)

export default Home
