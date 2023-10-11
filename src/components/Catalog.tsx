import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import CharactersResponse from '../interfaces/characters-response'
import { queryKeys } from '../constants/queries'
import CharacterCard from './CharacterCard'
import StatusFilter from './StatusFilter'
import { CharacterStatusKey } from '../types/character-status'
import { useState, useEffect } from 'react'

const Catalog = () => {

    const [filter, setFilter] = useState('')

    const fetchCharacters = (): Promise<CharactersResponse> =>
        axios.get(`${import.meta.env.VITE_CHARACTERS_ENDPOINT}?status=${filter}`).then(response => response.data)
    const { data, refetch } = useQuery(queryKeys.characters, fetchCharacters, {
        enabled: false
    })

    useEffect(() => {
        refetch()
    }, [filter, refetch])

    if (!data || !data.results) {
        return null
    }

    const characters = data.results

    const handleFilter = (key: CharacterStatusKey | string) => {
        setFilter(key)
    }



    return (
        <div className='flex flex-col space-y-8 items-center'>

            <StatusFilter onFilter={handleFilter} />
            <div className="grid gap-8 grid-cols-2 md:grid-cols-4">

                {characters.map((character, index) => (
                    <CharacterCard character={character} key={index} />
                ))}

            </div>
        </div>
    )
}

export default Catalog