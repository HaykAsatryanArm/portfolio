import React from 'react'
import { Header, Home, Skills, Experience, Projects, Contact, Footer } from './Components'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const App = () => {
    return (
        <>
            <Router>
                <Header />
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/skills" element={<Skills />} />
                    <Route exact path="/experience" element={<Experience />} />
                    <Route exact path="/projects" element={<Projects />} />
                    <Route exact path="/contact" element={<Contact />} />
                </Routes>
                <Footer />
            </Router>
        </>
    )
}

export default App
