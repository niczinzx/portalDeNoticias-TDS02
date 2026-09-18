import Footer from "../components/Footer"
import Article from "../components/Article"
import SideBar from "../components/SideBar"

export default function Home() {
    return (
        <div>
            <h1>Portal de Notícias</h1>

            <SideBar />

            <Article />
            <Article />
            <Article />

            <Footer />
        </div>
    )

}