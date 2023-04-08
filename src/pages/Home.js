import { Header } from "../components/Header" 
import { Banner } from "../components/Banner"
import { Section } from "../components/Section"
import { Footer } from "../components/Footer"

export const Home = () => {



    return (
        <div>
            <Header />
            <Banner image="home" text="Chez vous, partout et ailleurs" />
            <Section/>
            <Footer/>
        </div>
    )

}