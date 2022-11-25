import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Home from './components/Home/Home';
import NavBar from './components/NavBar/NavBar';
import Projects from './components/Projects/Projects';
import translate from './data/translate';

document.title = translate('WEB_TITLE');

function App() {
    return (
        <>
            <NavBar />
            <Home />
            <About />
            <Projects />
            <Contact />
        </>
    );
}

export default App;
