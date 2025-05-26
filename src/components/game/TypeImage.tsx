import { memo } from "react"
import Image, { StaticImageData } from "next/image"
import type PokemonType from "@/types/PokemonType"
import normal from "@/images/normal.png"
import fire from "@/images/fire.png"
import water from "@/images/water.png"
import grass from "@/images/grass.png"
import electric from "@/images/electric.png"
import ice from "@/images/ice.png"
import fighting from "@/images/fighting.png"
import poison from "@/images/poison.png"
import ground from "@/images/ground.png"
import flying from "@/images/flying.png"
import psychic from "@/images/psychic.png"
import bug from "@/images/bug.png"
import rock from "@/images/rock.png"
import ghost from "@/images/ghost.png"
import dragon from "@/images/dragon.png"
import dark from "@/images/dark.png"
import steel from "@/images/steel.png"
import fairy from "@/images/fairy.png"

const imageMap: Record<PokemonType, StaticImageData> = {
  normal,
  fire,
  water,
  grass,
  electric,
  ice,
  fighting,
  poison,
  ground,
  flying,
  psychic,
  bug,
  rock,
  ghost,
  dragon,
  dark,
  steel,
  fairy
}

type Props = {
  type: PokemonType
}

const TypeImage = ({ type }: Props) => (
  <Image
    src={imageMap[type]}
    alt={type}
    height={38}
    width={108}
  />
)

export default memo(TypeImage)
