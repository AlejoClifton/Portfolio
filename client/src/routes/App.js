import NavBarView from '../views/NavBar/NavBarView.jsx';
import Perfil from '../views/Perfil/PerfilView.jsx';
import AboutMeView from '../views/AboutMe/AboutMeView.jsx';
import TechnologiesView from '../views/Technologies/TechnologiesView.jsx';
import ProjectView from '../views/Projects/ProjectsView.jsx';
import ContactView from '../views/Contact/ContactView.jsx';
import FooterView from '../views/Footer/FooterView.jsx';

import '../styles/app.scss';

function App() {
    return (
        <div className="app">
            <NavBarView />
            <Perfil />
            <AboutMeView />
            <TechnologiesView />
            <ProjectView />
            <ContactView />
            <FooterView />
        </div>
    );
}

export default App;
