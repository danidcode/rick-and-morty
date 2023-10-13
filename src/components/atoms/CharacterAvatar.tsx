
type Props = {
    image: string
    dimensions: string
}
const CharacterAvatar = ({ image, dimensions }: Props) => {
    return (
        <>
            <img className={`${dimensions}  rounded-full`} src={image} alt="avatar" />
        </>
    )
}

export default CharacterAvatar