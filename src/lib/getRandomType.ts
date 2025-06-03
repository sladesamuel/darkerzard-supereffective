import PokemonType, { pokemonTypes } from "@/types/PokemonType"

const getRandomType = (): PokemonType => {
  const randomIndex = Math.floor(Math.random() * pokemonTypes.length)
  return pokemonTypes[randomIndex]
}

export default getRandomType
