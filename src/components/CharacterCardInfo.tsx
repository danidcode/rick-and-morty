import { Character } from "../interfaces/character"
import { getStatusColor } from "../utils/getStatusColor"

type Props = {
  character: Character
}
const CharacterCardInfo = ({ character }: Props) => {
  const { status, species, gender } = character

  return (
    <div className="flex flex-col sm:flex-row text-xs sm:text-sm space-x-2 items-center ">
      <span className={`${getStatusColor(status)} font-bold`}>
        {status}
      </span>
      <span className="text-neutralGrey hidden sm:block">
        |
      </span>
      <div className="space-x-2">
        <span className="text-neutralGrey">
          {species}
        </span>
        <span className="text-neutralGrey">
          |
        </span>
        <span className="text-neutralGrey">
          {gender}
        </span>
      </div>
    </div>
  )
}

export default CharacterCardInfo