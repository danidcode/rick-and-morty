import { useState } from "react"
import { IoLocationOutline } from 'react-icons/io5'
import { CharacterLocation as CharacterLocationProps } from "../../interfaces/character-location"
import Dropdown from "../atoms/DropdownButton"
type Props = {
    location: CharacterLocationProps
}
const CharacterLocation = ({ location }: Props) => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div className="flex items-center w-full flex-col space-y-4 ">

            <div className="flex justify-between w-full">
                <div className="flex items-center space-x-2">
                    <IoLocationOutline size={30} className="text-primary text-bold" />
                    <span className="font-bold"> Locations </span>
                </div>

                <Dropdown isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />

            </div>
            {isOpen && (
                <div className="text-gray-400 flex w-full ">
                    {location.name}
                </div>
            )}



        </div>
    )
}

export default CharacterLocation