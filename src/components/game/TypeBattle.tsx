import { Heading, HStack } from "@chakra-ui/react"
import SingleType from "./SingleType"

const TypeBattle = () => (
  <HStack align="center" justifyContent="center">
    <SingleType type="fire" />

    <Heading>
      vs
    </Heading>

    <SingleType type="water" />
  </HStack>
)

export default TypeBattle
