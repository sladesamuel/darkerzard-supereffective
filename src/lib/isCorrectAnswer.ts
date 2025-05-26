import EffectivenessAnswer from "@/types/EffectivenessAnswer"
import GameRound from "@/types/GameRound"

export default (round: GameRound, answer: EffectivenessAnswer): boolean => {
  // TODO: This function should determine if the answer is correct based on the game round.
  //       For now, we will return true for a hardcoded example.
  return answer.value === "0.5"
}
