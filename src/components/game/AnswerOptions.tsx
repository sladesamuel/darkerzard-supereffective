"use client"

import { Center, RadioCard, VStack } from "@chakra-ui/react"
import EffectivenessAnswer from "@/types/EffectivenessAnswer"

const options: EffectivenessAnswer[] = [
  { value: "0", label: "Ineffective (x0)" },
  { value: "0.25", label: "Not Very Effective (x0.25)" },
  { value: "0.5", label: "Resisted (x0.5)" },
  { value: "1", label: "Effective (x1)" },
  { value: "2", label: "Super Effective (x2)" },
  { value: "4", label: "Quad Effective (x4)" }
]

type Props = {
  onAnswerSelected: (answer: EffectivenessAnswer) => void
}

const AnswerOptions = ({ onAnswerSelected }: Props) => {
  const handleValueChange = (value: string | null) => {
    const selectedAnswer = options.find(option => option.value === value)

    if (selectedAnswer) {
      onAnswerSelected(selectedAnswer)
    }
  }

  return (
    <RadioCard.Root
      onValueChange={({ value }) => handleValueChange(value)}
      defaultValue={null}
      size="lg"
      colorScheme="blue"
      variant="outline"
    >
      <VStack align="stretch">
        {options.map((option) => (
          <RadioCard.Item key={option.value} value={option.value}>
            <RadioCard.ItemHiddenInput />
            <RadioCard.ItemControl>
              <RadioCard.ItemText>
                <Center>
                  {option.label}
                </Center>
              </RadioCard.ItemText>
            </RadioCard.ItemControl>
          </RadioCard.Item>
        ))}
      </VStack>
    </RadioCard.Root>
  )
}

export default AnswerOptions
