import GameRound from "@/types/GameRound"
import getRandomType from "./getRandomType"

export default (): GameRound => ({
  playerType: getRandomType(),
  opponentType: getRandomType()
})
