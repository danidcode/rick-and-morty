import { SlArrowDown, SlArrowUp } from 'react-icons/sl'

type Props = {
    isOpen: boolean
    onClick: () => void
}

const DropdownButton = ({ isOpen, onClick }: Props) => {
    return (
        <div>
            {isOpen ? <button onClick={onClick}>
                <SlArrowUp size={20} className="text-gray-400" />
            </button> :
                <button onClick={onClick}>
                    <SlArrowDown size={20} className="text-gray-400" />
                </button>}
        </div>
    )
}

export default DropdownButton