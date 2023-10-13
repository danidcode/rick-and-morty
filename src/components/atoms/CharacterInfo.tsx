import { Character } from "../../interfaces/character"
import { getStatusColor } from "../../utils/getStatusColor"

type Props = {
  character: Character
  spaceY?: string
  nameSize?: string
  infoSize?: string
  infoInRow?: boolean
  alignItems?: string
}
const CharacterInfo = ({ character, spaceY = 'space-y-2', nameSize = 'sm:text-lg',
  infoSize = 'sm:text-sm', infoInRow = false, alignItems = 'items-center' }: Props) => {
  const { name, status, species, gender } = character

  return (
    <div className={`px-6 py-2 sm:py-6 flex text-center ${alignItems} flex-col ${spaceY}`}>
      <span className={`font-bold text-sm  ${nameSize} font-poppins`}>{name}</span>

      <div className={`flex ${infoInRow ? 'flex-row' : 'flex-col lg:flex-row'} text-xs ${infoSize} space-x-2 items-center space-y-1 sm:space-y-0 `}>
        <span className={`${getStatusColor(status)} font-bold`}>
          {status}
        </span>

        <span className={`text-neutralGrey ${infoInRow ? 'block' : 'hidden lg:block'}`}>
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
    </div>
  )
}

export default CharacterInfo