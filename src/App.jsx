import React, {Component} from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Portfolio from './components/portfolio/Portfolio'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import SkillPage from './pages/SkillPage'

class App extends Component {
    render() { 
        return (
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={
                        <>
                            <Header />
                            <Nav />
                            <About />
                            <Experience />
                            <Portfolio />
                            <Contact />
                            <Footer />
                        </>
                    } />
                    <Route path="/skills/:slug" element={<SkillPage />} />
                </Routes>
            </BrowserRouter>
        )
    }
};

export default App;
