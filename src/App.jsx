import React from 'react'
import { Header, Home, Skills, Experience, Projects, Contact, Footer } from './Components'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const App = () => {
    return (
        <>
            <Router>
                <Header />
                <Routes>
                    <Route exact path="/portfolio/" element={<Home />} />
                    <Route exact path="/portfolio/skills" element={<Skills />} />
                    <Route exact path="/portfolio/experience" element={<Experience />} />
                    <Route exact path="/portfolio/projects" element={<Projects />} />
                    <Route exact path="/portfolio/contact" element={<Contact />} />
                </Routes>
                <Footer />
            </Router>
        </>
    )
}

export default App
