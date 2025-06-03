import GameRound from "@/types/GameRound"
import getRandomType from "./getRandomType"

const getNextRound = (): GameRound => ({
  playerType: getRandomType(),
  opponentType: getRandomType()
})

export default getNextRound
