"use client"

import { useEffect, useState } from "react"
import getNextRound from "@/lib/getNextRound"
import isCorrectAnswer from "@/lib/isCorrectAnswer"
import type GameRound from "@/types/GameRound"
import type EffectivenessAnswer from "@/types/EffectivenessAnswer"
import QuizRound from "./QuizRound"
import ResultPopover from "./ResultPopover"

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
            selectedAnswer={result?.answer?.value ?? null}
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
