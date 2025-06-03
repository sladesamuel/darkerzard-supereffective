import Effectiveness from "@/types/Effectiveness"
import GameRound from "@/types/GameRound"
import typeEffectivenessMap from "./typeEffectivenessMap"

export default ({ playerType, opponentType }: GameRound): Effectiveness =>
  typeEffectivenessMap[playerType]?.[opponentType] ?? Effectiveness.EFFECTIVE
