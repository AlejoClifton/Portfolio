import NavBar from './components/header/navBar/NavBar';
import PerfilContainer from './components/body/perfil/PerfilContainer';
import AboutMeContainer from './components/body/aboutMe/AboutMeContainer';

function App() {
    return (
        <div className="App">
            <NavBar />
            <PerfilContainer />
            <AboutMeContainer />
        </div>
    );
}

export default App;
