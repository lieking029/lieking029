import React from 'react'
import Header from './components/Header/Header'
import AboutMe from './components/AboutMe/AboutMe'
import Services from './components/Services/Services'
import Projects from './components/Projects/Projects'
import Contact from './components/contacts/Contact'

const App = () => {
  return (
    <div className=''>
      <Header />
      <AboutMe />
      <Services />
      <Projects />
      <Contact />
    </div>
  )
}

export default App
