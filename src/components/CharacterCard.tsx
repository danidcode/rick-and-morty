import { Character } from '../interfaces/character'
import CharacterCardInfo from './CharacterCardInfo'

type Props = {
    character: Character
}
const CharacterCard = ({ character }: Props) => {
    return (
        <div className="max-w-[165px] sm:max-w-[300px]  overflow-hidden flex items-center flex-col rounded-md border
        sm:border-2 border-lightNeutral sm:border-customGray">
            <img className="w-full rounded-md max-w-[133px] mt-4 sm:mt-0 sm:max-w-full" src={character.image} alt="Sunset in the mountains" />
            <div className="px-6 py-2 sm:py-6 flex items-center flex-col">
                <div className="font-bold text-sm  sm:text-lg  mb-2 font-poppins">{character.name}</div>
                <CharacterCardInfo character={character} />
            </div>

        </div>
    )
}

export default CharacterCard