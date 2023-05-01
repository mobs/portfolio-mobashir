import { CSSTransition, TransitionGroup } from 'react-transition-group';

import { Route, Routes, Navigate, useLocation } from "react-router-dom";
import './app.css';

//components
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import Education from './components/Education/Education';
import Certifications from "./components/Certifications/Certifications";
import Projects from "./components/Projects/Project";
import AboutMe from "./components/About Me/AboutMe";

import { useSelector } from "react-redux";

const App=()=> {
    const location=useLocation();
    const theme = useSelector(state => state.theme);
    return (
        <div className="App" style={theme}>
            <Navbar />
            <div className="app-content">
                <TransitionGroup>
                    <CSSTransition timeout={300} classNames='fade' key={location.key}>
                        <Routes location={location}>
                            <Route path="/" element={<Navigate to="/home" />} />
                            <Route path="/home" element={<Home />} />
                            <Route path="/about-me" element={<AboutMe />} />
                            <Route path="/education" element={<Education />} />
                            <Route path="/certifications" element={ <Certifications />} />
                            <Route path="/projects" element={<Projects />} />
                            <Route path="*" element={<Navigate to="/home" />} />
                        </Routes>
                    </CSSTransition>
                </TransitionGroup>
            </div>
            <Footer />
        </div>
    )
}

export default App;