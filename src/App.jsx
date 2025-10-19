import React, {Component} from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ExperiencePage from './pages/ExperiencePage'
import PortfolioPage from './pages/PortfolioPage'
import ContactPage from './pages/ContactPage'
import SkillPage from './pages/SkillPage'

class App extends Component {
    render() { 
        return (
            <BrowserRouter>
                <ScrollToTop />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/experience" element={<ExperiencePage />} />
                    <Route path="/portfolio" element={<PortfolioPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                    <Route path="/skills/:slug" element={<SkillPage />} />
                </Routes>
            </BrowserRouter>
        )
    }
};

export default App;
