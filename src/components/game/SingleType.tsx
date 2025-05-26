import type PokemonType from "@/types/PokemonType"
import TypeImage from "./TypeImage"

type Props = {
  type: PokemonType
}

const SingleType = ({ type }: Props) => (
  <TypeImage type={type} />
)

export default SingleType
