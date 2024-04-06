import React from 'react'
import './app.scss'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero/Hero'
import Parallax from './Components/parallax/Parallax'
import Service from './Components/serivce/Service'
import Portfolio from './Components/portfolio/Portfolio'
import Contact from './Components/contact/Contact'

const App = () => {
  return (
    <div>

      <section id='Homepage'>
        <Navbar></Navbar>
        <Hero />
      </section>
      <section id='Services'><Parallax type="services"/></section>
      <section><Service></Service></section>
      <section id='Portfolio'><Parallax type="portfolio"/></section>
  

     <Portfolio></Portfolio>

      <section id='Contact'>
        <Contact></Contact>
        </section>
      
    </div>
  )
}

export default App
