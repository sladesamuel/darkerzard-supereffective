"use client"

import { useEffect, useState } from "react"
import getNextRound from "@/lib/getNextRound"
import getCorrectAnswer from "@/lib/getCorrectAnswer"
import type GameRound from "@/types/GameRound"
import Effectiveness from "@/types/Effectiveness"
import QuizRound from "./QuizRound"
import ResultPopover from "./ResultPopover"

const Game = () => {
  const [gameRound, setGameRound] = useState<GameRound | undefined>()
  const [result, setResult] = useState<{
    correct: boolean
    answer: Effectiveness
  } | undefined>()

  const handleAnswerSelected = (answer: Effectiveness) => {
    if (!gameRound) return

    const correctAnswer = getCorrectAnswer(gameRound)
    const correct = answer === correctAnswer

    setResult({
      correct,
      answer: correctAnswer
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
            selectedAnswer={result?.answer ?? null}
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
