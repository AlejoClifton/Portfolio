import NavBar from './components/header/navBar/NavBar';
import PerfilContainer from './components/body/perfil/PerfilContainer';
import AboutMeContainer from './components/body/aboutMe/AboutMeContainer';
import Technologies from './components/body/technologies/Technologies';
import Projects from './components/body/projects/Projects';
import Footer from './components/footer/Footer';
import Contact from './components/body/contact/Contact';

function App() {
    return (
        <div className="App">
            <NavBar />
            <PerfilContainer />
            <AboutMeContainer />
            <Technologies />
            <Projects />
            <Contact />
            <Footer />
        </div>
    );
}

export default App;
