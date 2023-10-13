
type Props = {
    onClick: () => void
}

const LoadMoreButton = ({ onClick }: Props) => {
    return (
        <div className="pt-4">
            <button className="text-secondary decoration-2 underline underline-offset-8
             background-transparent font-medium text-xl 
               mr-1 mb-1 ease-linear transition-all duration-150 hover:text-black" type="button"
                onClick={onClick}
            >
                LOAD MORE
            </button>
        </div>
    )
}

export default LoadMoreButton