import React from 'react'
import Header from './components/Header/Header'
import AboutMe from './components/AboutMe/AboutMe'
import Skills from './components/Skills/Skills'
import Services from './components/Services/Services'
import Projects from './components/Projects/Projects'

const App = () => {
  return (
    <div className=''>
      <Header />
      <AboutMe />
      <Services />
      <Skills />
      <Projects />
    </div>
  )
}

export default App
