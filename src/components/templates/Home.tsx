import Catalog from "../organisms/Catalog"
import Header from "../organisms/Header"

const Home = () => {
    return (
        <div className="container mx-auto px-6 lg:px-28 py-14 flex flex-col items-center">
            <div className="relative flex space-y-6  sm:space-y-12 flex-col">
                <Header />
                <Catalog />
            </div>
        </div>
    )
}

export default Home