import { z } from "zod"
import Effectiveness from "@/types/Effectiveness"
import { pokemonTypes } from "@/types/PokemonType"
import typesData from "@/data/types.json" assert { type: "json" }

const PokemonTypeSchema = z.enum(pokemonTypes)
const EffectivenessSchema = z.nativeEnum(Effectiveness)

const TypeEffectivenessMapSchema = z.record(
  PokemonTypeSchema,
  z.record(PokemonTypeSchema, EffectivenessSchema)
)

const typeEffectivenessMap = TypeEffectivenessMapSchema.parse(typesData)

export default typeEffectivenessMap
