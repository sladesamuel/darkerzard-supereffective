import PokemonType, { pokemonTypes } from "@/types/PokemonType"

export default (): PokemonType => {
  const randomIndex = Math.floor(Math.random() * pokemonTypes.length)
  return pokemonTypes[randomIndex]
}
