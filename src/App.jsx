import React, {Component} from 'react'
<<<<<<< HEAD
import { Routes, Route } from 'react-router-dom'
=======
import { BrowserRouter, Routes, Route } from 'react-router-dom'
>>>>>>> 746ed310d015ed966efd93e63c50c046623bc0c8
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Portfolio from './components/portfolio/Portfolio'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
<<<<<<< HEAD
import SkillPage from './components/experience/SkillPage'


class App extends Component {
	render() { 
		return (
			<Routes>
				<Route path="/" element={
					<div>
						<Header />
						<Nav />
						<About />
						<Experience />
						{/* <Services /> */}
						<Portfolio />
						{/* <Testimonials /> */}
						<Contact />
						<Footer />
					</div>
				} />
				<Route path="/skills/:skill" element={<SkillPage/>} />
			</Routes>
		)
	}
=======
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
>>>>>>> 746ed310d015ed966efd93e63c50c046623bc0c8
};

export default App;
