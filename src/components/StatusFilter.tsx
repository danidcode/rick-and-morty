import { useState } from 'react'
import { statusFilters } from '../constants/filter'
import { CharacterStatusKey } from '../types/character-status'

type Props = {
  onFilter: (key: CharacterStatusKey | string) => void
}
const StatusFilter = ({ onFilter }: Props) => {

  const [active, setActive] = useState<CharacterStatusKey | string>('')

  return (
    <div className='flex space-x-8 sm:space-x-20 text-sm sm:text-xl'>
      {
        statusFilters.map((filter, index) => (
          <div className={`${active === filter.key ? 'text-secondary decoration-2 underline underline-offset-8' : null} cursor-pointer`}

            onClick={() => {
              setActive(filter.key)
              onFilter(filter.key)
            }}
            key={index}>
            {filter.name}

          </div>
        ))
      }
    </div>
  )
}

export default StatusFilter