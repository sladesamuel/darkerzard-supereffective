import Effectiveness from "@/types/Effectiveness"
import GameRound from "@/types/GameRound"
import typeEffectivenessMap from "./typeEffectivenessMap"

const getCorrectAnswer = ({ playerType, opponentType }: GameRound): Effectiveness =>
  typeEffectivenessMap[playerType]?.[opponentType] ?? Effectiveness.EFFECTIVE

export default getCorrectAnswer
