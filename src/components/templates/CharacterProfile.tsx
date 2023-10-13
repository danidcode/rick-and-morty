import { useContext, useEffect } from "react"
import SelectedCharacterContext from "../../context/SelectedCharacterContext"
import CharacterInfo from "../atoms/CharacterInfo"
import CharacterLocation from "../organisms/CharacterLocation"
import { useNavigate } from "react-router-dom"
import CharacterAvatar from "../atoms/CharacterAvatar"
import CharacterEpisodes from "../organisms/CharacterEpisodes"



const CharacterProfile = () => {

    const { value: character } = useContext(SelectedCharacterContext)
    const navigate = useNavigate()
    useEffect(() => {
        if (!character) {
            navigate('/')
        }

    }, [character, navigate])

    if (!character) {
        return null
    }
    const handleClick = () => {
        navigate('/')
    }
    const { location, episode, image } = character

    const episodesIds = episode.map((url) => {
        const parts = url.split('/');
        return parts[parts.length - 1];
    });
    const episodesIdsConverted = episodesIds.map((id) => Number(id))
    return (


        <div className="container mx-auto max-w-screen-sm px-8 sm:px-0 py-8 sm:py-32 flex flex-col items-start sm:items-center font-poppins h-screen">
            <div className="w-full space-y-8">
                <div className="flex flex-row sm:flex-col items-center">
                    <CharacterAvatar image={image} dimensions='w-[72px] h-[72px] sm:w-[122px] sm:h-[122px]' />
                    <div>
                        <CharacterInfo character={character} spaceY='space-y-1' nameSize='sm:text-2xl'
                            infoSize='sm:text-base' infoInRow={true} alignItems='items-start sm:items-center' />
                    </div>

                </div>

                <CharacterLocation location={location} />
                <CharacterEpisodes episodesIds={episodesIdsConverted} />
            </div>
            <div className="mt-auto w-full flex justify-center py-14">
                <button className="bg-primary hover:black text-white text-sm font-bold py-4 px-32 shadow-lg shadow-primary/20 rounded
                                 hover:bg-black" onClick={handleClick}>
                    Back
                </button>
            </div>

        </div>
    )
}

export default CharacterProfile