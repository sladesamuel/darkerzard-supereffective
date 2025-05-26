"use client"

import { useState } from "react"
import GameRound from "@/types/GameRound"
import EffectivenessAnswer from "@/types/EffectivenessAnswer"
import QuizRound from "./QuizRound"
import ResultPopover from "./ResultPopover"

const getNextRound = (): GameRound => {
  // TODO: This function should return the next game round.
  //       For now, we will return a hardcoded example.
  return {
    playerType: "fire",
    opponentType: "water"
  }
}

const isCorrectAnswer = (round: GameRound, answer: EffectivenessAnswer): boolean => {
  // TODO: This function should determine if the answer is correct based on the game round.
  //       For now, we will return true for a hardcoded example.
  return answer.value === "0.5"
}

const Game = () => {
  const [result, setResult] = useState<{
    correct: boolean
    answer: EffectivenessAnswer
  } | undefined>()

  const gameRound = getNextRound()

  const handleAnswerSelected = (answer: EffectivenessAnswer) => {
    const correct = isCorrectAnswer(gameRound, answer)

    setResult({
      correct,
      answer
    })
  }

  return (
    <>
      <QuizRound {...gameRound} onAnswerSelected={handleAnswerSelected} />

      <ResultPopover
        show={!!result}
        isCorrect={result?.correct}
        answer={result?.answer}
        round={gameRound}
        onClose={() => setResult(undefined)}
      />
    </>
  )
}

export default Game
