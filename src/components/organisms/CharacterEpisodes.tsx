import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import { useState } from "react"
import { BsCameraVideo } from 'react-icons/bs'
import { Episode } from "../../interfaces/episode"
import DropdownButton from "../atoms/DropdownButton"

type Props = {
    episodesIds: number[]
}
const CharacterEpisodes = ({ episodesIds }: Props) => {

    const fetchEpisodes = async (): Promise<Episode[]> => {
        const response = await axios.get(`${import.meta.env.VITE_EPISODES_ENDPOINT}/[${episodesIds}]`)
        return response.data
    }

    const { data: episodes } = useQuery({
        queryKey: ['episodes'],
        queryFn: () => fetchEpisodes(),
        keepPreviousData: true,
        staleTime: 5000,
    })

    const [isOpen, setIsOpen] = useState(false)

    if (!episodes) {
        return null
    }


    return (
        <div className="flex items-center w-full flex-col space-y-4 ">

            <div className="flex justify-between w-full">
                <div className="flex items-center space-x-2">
                    <BsCameraVideo size={30} className="text-primary text-bold" />
                    <span className="font-bold"> Episodes </span>
                </div>

                <DropdownButton isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />

            </div>
            {isOpen && (
                <div className="text-gray-400 w-full flex flex-wrap flex-col sm:flex-row ">
                    {episodes.map((episode, index) => (
                        <div className="flex space-x-4 mx-4 my-6 " key={index}>
                            <div>
                                {episode.name}
                            </div>
                            {index !== episodes.length - 1 && (
                                <div className="hidden sm:block">
                                    |
                                </div>
                            )}

                        </div>
                    ))}
                </div>
            )}



        </div>
    )
}

export default CharacterEpisodes