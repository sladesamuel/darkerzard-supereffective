"use client"

import { useEffect, useState } from "react"
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
  const [gameRound, setGameRound] = useState<GameRound | undefined>()
  const [result, setResult] = useState<{
    correct: boolean
    answer: EffectivenessAnswer
  } | undefined>()

  const handleAnswerSelected = (answer: EffectivenessAnswer) => {
    if (!gameRound) return

    const correct = isCorrectAnswer(gameRound, answer)

    setResult({
      correct,
      answer
    })
  }

  const playNextRound = () => {
    setResult(undefined)
    setGameRound(getNextRound())
  }

  useEffect(() => playNextRound(), [])

  // TODO: Show skeleton when game round is undefined.
  return (
    <>
      {gameRound && (
        <>
          <QuizRound
            {...gameRound}
            onAnswerSelected={handleAnswerSelected}
          />

          <ResultPopover
            show={!!result}
            isCorrect={result?.correct}
            answer={result?.answer}
            round={gameRound}
            onClose={playNextRound}
          />
        </>
      )}
    </>
  )
}

export default Game
