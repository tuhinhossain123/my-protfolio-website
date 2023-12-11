
import About from "../../About/About";
import Contact from "../../Contact/Contact";
import Skills from "../../Skills/Skills";
import Banner from "../Banner/Banner";


const Home = () => {
    return (
        <div id="/">
            <Banner></Banner>
            <Skills></Skills>
            <About></About>
            <Contact></Contact>
        </div>
    );
};

export default Home;