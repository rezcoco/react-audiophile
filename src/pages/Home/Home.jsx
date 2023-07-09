import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Hero } from "../../components/Hero";
import { Main } from "../../components/Main";

const Home = () => {
  return (
    <div>
        <header className="bg-[#191919]">
            <Header />
            <Hero />
        </header>
        <Main />
        <Footer />
    </div>
  )
}

export default Home