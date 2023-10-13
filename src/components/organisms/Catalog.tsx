import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { Character } from '../../interfaces/character'
import CharactersResponse from '../../interfaces/characters-response'
import { CharacterStatusKey } from '../../types/character-status'
import CharacterCard from '../molecules/CharacterCard'
import LoadMoreButton from '../atoms/LoadMoreButton'
import StatusFilter from '../molecules/StatusFilter'

const Catalog = () => {

    const [filter, setFilter] = useState('')
    const [currentPage, setCurrentPage] = useState(1);
    const [characters, setCharacters] = useState<Character[]>([])
    const [charactersToShowCount, setCharactersToShowCount] = useState(8)
    const visibleCharacters = characters.slice(0, charactersToShowCount)
    const fetchCharacters = async (page: number = 1, filter: string = ''): Promise<CharactersResponse> => {
        const response = await axios.get(`${import.meta.env.VITE_CHARACTERS_ENDPOINT}?page=${page}&status=${filter}`)
        return response.data
    }
    const { data } = useQuery({
        queryKey: ['characters', currentPage, filter],
        queryFn: () => fetchCharacters(currentPage, filter),
        keepPreviousData: true,
        staleTime: 5000,
    })

    useEffect(() => {

        if (data?.results) {
            const newCharacters = data.results;
            if (charactersToShowCount > 8) {
                setCharacters(prevCharacters => [...prevCharacters, ...newCharacters]);
            } else {
                setCharacters(newCharacters);
            }


        }

    }, [charactersToShowCount, data?.results]);


    if (!data || !data.results) {
        return null
    }

    const pages = data.info.pages
    const totalCharacters = data.info.count

    const handleFilter = (key: CharacterStatusKey | string) => {
        setCharactersToShowCount(8)
        setCurrentPage(1)
        setFilter(key)
    }

    const handleCharactersToShowCount = () => {
        const newCount = charactersToShowCount + 8;
        if (newCount <= totalCharacters) {
            setCharactersToShowCount(newCount);
        } else {
            setCharactersToShowCount(totalCharacters);
        }
    }

    const handleLoadMore = () => {
        if (characters.length < visibleCharacters.length + 8) {
            setCurrentPage(currentPage + 1)
            handleCharactersToShowCount()

        } else {
            handleCharactersToShowCount()
        }

    }

    return (
        <div className='flex flex-col space-y-8 items-center'>

            <StatusFilter onFilter={handleFilter} />
            <div className="grid gap-8 grid-cols-2 md:grid-cols-4">

                {visibleCharacters.map((character, index) => (
                    <CharacterCard character={character} key={index} />
                ))}

            </div>
            {currentPage < pages && (
                <LoadMoreButton onClick={handleLoadMore} />
            )}

        </div>
    )
}

export default Catalog