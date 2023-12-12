
import About from "../../About/About";
import Contact from "../../Contact/Contact";
import Education from "../../Education/Education";
import Skills from "../../Skills/Skills";
import Banner from "../Banner/Banner";


const Home = () => {
    return (
        <div id="/">
            <Banner></Banner>
            <Skills></Skills>
            <Education></Education>
            <About></About>
            <Contact></Contact>
        </div>
    );
};

export default Home;