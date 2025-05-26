import { memo } from "react"
import { Center, VStack, Popover, Portal, Text, Button } from "@chakra-ui/react"
import type EffectivenessAnswer from "@/types/EffectivenessAnswer"
import type GameRound from "@/types/GameRound"
import TypeImage from "./TypeImage"

type Props = {
  show: boolean
  round: GameRound
  answer?: EffectivenessAnswer
  isCorrect?: boolean
  onClose: () => void
}

const CorrectTitle = () => (
  <div>Correct!</div>
)

const IncorrectTitle = () => (
  <div>Incorrect!</div>
)

const ResultPopover = ({ show, round, answer, isCorrect, onClose }: Props) => (
  <Popover.Root
    open={show}
    modal={true}
    size="lg"
  >
    <Popover.Trigger asChild>
      <span />
    </Popover.Trigger>

    <Portal>
      <Popover.Positioner>
        <Popover.Content>
          <Popover.Body>
            <Popover.Title fontWeight="medium" fontSize="lg">
              <Center>
                {isCorrect ? <CorrectTitle /> : <IncorrectTitle />}
              </Center>
            </Popover.Title>

            <VStack justifyContent="center" my={4}>
              <TypeImage type={round.playerType} />

              <Text>
                is <b>{answer?.label}</b> against
              </Text>

              <TypeImage type={round.opponentType} />

              <Button
                colorPalette="blue"
                marginTop={8}
                width="100%"
                fontWeight="bold"
                onClick={e => {
                  e.preventDefault()
                  onClose()
                }}
              >
                Next Round &gt;
              </Button>
            </VStack>
          </Popover.Body>
        </Popover.Content>
      </Popover.Positioner>
    </Portal>
  </Popover.Root>
)

export default memo(ResultPopover)
