import { useContext } from "react";
import SelectedCharacterContext from "../../context/SelectedCharacterContext";
import CharacterAvatar from "../atoms/CharacterAvatar";
import { useNavigate } from "react-router-dom";

const Header = () => {
    const { value: character } = useContext(SelectedCharacterContext);
    const navigate = useNavigate()

    const handleClick = () => {
        navigate('/profile')
    }
    return (
        <div className="flex w-full items-center">
            <div className="flex-grow text-center">
                <h4 className="font-poppins font-semibold text-base sm:text-2xl md:text-4xl text-primaryDark">
                    RICK & MORTY
                </h4>
            </div>

            {character && (
                <div className="absolute right-0 space-x-4 flex items-center">
                    <button
                        className="filter transition duration-300 ease-in-out hover:grayscale hover:contrast-200"
                        onClick={handleClick}>
                        <CharacterAvatar image={character.image} dimensions='w-[40px] h-[40px] sm:w-[48px] sm:h-[48px]' />
                    </button>

                    <span className="font-poppins hidden sm:block">My Profile</span>
                </div>

            )}
        </div>
    );
};

export default Header;