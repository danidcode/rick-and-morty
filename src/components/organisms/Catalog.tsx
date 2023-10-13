import LoadMoreButton from '../atoms/LoadMoreButton'
import { useCharacter } from '../hooks/useCharactesr'
import CharacterCard from '../molecules/CharacterCard'
import StatusFilter from '../molecules/StatusFilter'

const Catalog = () => {

    const { visibleCharacters: characters, pages, handleLoadMore, currentPage, handleFilter } = useCharacter()

    return (
        <div className='flex flex-col space-y-8 items-center'>

            <StatusFilter onFilter={handleFilter} />
            <div className="grid gap-8 grid-cols-2 md:grid-cols-4">

                {characters.map((character, index) => (
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