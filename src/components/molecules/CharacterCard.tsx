import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import SelectedCharacterContext from '../../context/SelectedCharacterContext'
import { Character } from '../../interfaces/character'
import CharacterInfo from '../atoms/CharacterInfo'

type Props = {
    character: Character
}
const CharacterCard = ({ character }: Props) => {
    const navigate = useNavigate()
    const { setter: setSelectedCharacter } =
        useContext(SelectedCharacterContext)

    const handleClick = () => {
        setSelectedCharacter(character)
        navigate('/profile')
    }
    return (
        <div className="max-w-[165px] sm:max-w-[300px]  overflow-hidden flex items-center flex-col rounded-md border
        sm:border-2 border-lightNeutral sm:border-customGray cursor-pointer filter 
        transition duration-300 ease-in-out hover:grayscale hover:contrast-200" onClick={handleClick}>
            <img className="w-full rounded-md max-w-[133px] mt-4 sm:mt-0 sm:max-w-full" src={character.image} alt="character" />

            <CharacterInfo character={character} />

        </div>
    )
}

export default CharacterCard