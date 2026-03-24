import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Certificates from './components/Certificates'
import CodingProfiles from './components/CodingProfiles'
import Resume from './components/Resume'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Achievements from './components/Achievements'
import ProfessionalTraining from './components/ProfessionalTraining'
 import ProfilePhoto from "./ProfilePhoto";


function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <section id="home"><Hero /></section>
        <section id="ProfilePhoto"><ProfilePhoto /></section>
        <section id="about"><About /></section>
        <section id="skills"><Skills /></section>
        <section id="projects"><Projects /></section>
        <section id="training"><ProfessionalTraining /></section>
        <section id="certificates"><Certificates /></section>
        <section id="coding"><CodingProfiles /></section>
        <section id="achievements"><Achievements /></section>
        <section id="resume"><Resume /></section>
        <section id="contact"><Contact /></section>
      </main>
      <Footer />
    </div>
  )
}

export default App
