"use client"

import GameRound from "@/types/GameRound"
import EffectivenessAnswer from "@/types/EffectivenessAnswer"
import QuizRound from "./QuizRound"

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
  const gameRound = getNextRound()

  const handleAnswerSelected = (answer: EffectivenessAnswer) => {
    if (isCorrectAnswer(gameRound, answer)) {
      // TODO: Show popup.
      console.log("Correct answer selected:", answer)
    } else {
      console.log("Incorrect answer selected:", answer)
    }
  }


  return (
    <QuizRound {...gameRound} onAnswerSelected={handleAnswerSelected} />
  )
}

export default Game
