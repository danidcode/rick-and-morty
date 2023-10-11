import Catalog from "./Catalog"

const Home = () => {
    return (
        <div className="container mx-auto py-14 flex flex-col items-center space-y-12">
            <h4 className="font-poppins font-semibold text-base sm:text-4xl  space text-primaryDark">
                RICK & MORTY
            </h4>

            <Catalog />
        </div>
    )
}

export default Home