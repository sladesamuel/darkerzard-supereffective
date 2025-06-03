"use client"

import { useEffect, useState } from "react"
import { Center, RadioCard, VStack } from "@chakra-ui/react"
import Effectiveness from "@/types/Effectiveness"

const unsupportedOptions = [
  Effectiveness.NOT_VERY_EFFECTIVE,
  Effectiveness.QUAD_EFFECTIVE
]

// Filter out unsupported options from the Effectiveness enum until
// we build in support for dual types
const options: Effectiveness[] = Object.values(Effectiveness)
  .filter(option => !unsupportedOptions.includes(option))

type Props = {
  selectedAnswer: string | null
  onAnswerSelected: (answer: Effectiveness) => void
}

const AnswerOptions = ({ selectedAnswer, onAnswerSelected }: Props) => {
  const [value, setValue] = useState<string | null>(selectedAnswer)

  const handleValueChange = (value: string | null) => {
    const selectedAnswer = options.find(option => option === value)
    if (selectedAnswer) {
      onAnswerSelected(selectedAnswer)
    }
  }

  useEffect(() => {
    setValue(selectedAnswer)
  }, [selectedAnswer])

  return (
    <RadioCard.Root
      value={value}
      onValueChange={({ value }) => handleValueChange(value)}
      size="lg"
      colorScheme="blue"
      variant="outline"
    >
      <VStack align="stretch">
        {options.map((option) => (
          <RadioCard.Item key={option} value={option}>
            <RadioCard.ItemHiddenInput />
            <RadioCard.ItemControl>
              <RadioCard.ItemText>
                <Center>
                  {option}
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
