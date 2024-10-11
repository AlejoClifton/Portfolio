import AboutMe from '@/components/aboutMe/AboutMe';
import Contact from '@/components/contact/Contact';
import Experience from '@/components/experience/Experience';
import Freelancer from '@/components/freelancer/Freelancer';
import Header from '@/components/header/Header';
import Presentation from '@/components/presentation/Presentation';
import { Fragment } from 'react';

export default function Home() {
    return (
        <Fragment>
            <Header />
            <main>
                <Presentation />
                <Experience />
                <Freelancer />
                <AboutMe />
                <Contact />
            </main>
        </Fragment>
    );
}
