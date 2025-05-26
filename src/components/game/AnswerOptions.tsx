"use client"

import { useEffect, useState } from "react"
import { Center, RadioCard, VStack } from "@chakra-ui/react"
import type EffectivenessAnswer from "@/types/EffectivenessAnswer"

const options: EffectivenessAnswer[] = [
  { value: "0", label: "Ineffective (x0)" },
  { value: "0.25", label: "Not Very Effective (x0.25)" },
  { value: "0.5", label: "Resisted (x0.5)" },
  { value: "1", label: "Effective (x1)" },
  { value: "2", label: "Super Effective (x2)" },
  { value: "4", label: "Quad Effective (x4)" }
]

type Props = {
  selectedAnswer: string | null
  onAnswerSelected: (answer: EffectivenessAnswer) => void
}

const AnswerOptions = ({ selectedAnswer, onAnswerSelected }: Props) => {
  const [value, setValue] = useState<string | null>(selectedAnswer)

  const handleValueChange = (value: string | null) => {
    const selectedAnswer = options.find(option => option.value === value)
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
