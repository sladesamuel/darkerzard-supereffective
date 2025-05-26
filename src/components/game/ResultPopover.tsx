import { memo } from "react"
import { Center, VStack, Popover, Portal, Text } from "@chakra-ui/react"
import EffectivenessAnswer from "@/types/EffectivenessAnswer"
import GameRound from "@/types/GameRound"
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
    onOpenChange={({ open }) => {
      if (!open) {
        onClose()
      }
    }}
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

            <VStack justifyContent="center" my="4">
              <TypeImage type={round.playerType} />

              <Text my="4">
                is <b>{answer?.label}</b> against
              </Text>

              <TypeImage type={round.opponentType} />
            </VStack>
          </Popover.Body>
        </Popover.Content>
      </Popover.Positioner>
    </Portal>
  </Popover.Root>
)

export default memo(ResultPopover)
