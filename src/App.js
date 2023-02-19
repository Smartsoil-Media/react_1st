import React from 'react'

import {Footer, Blog, Possibility, Header, Features, Smartsoil } from './containers';
import {CTA, Brand, Navbar} from './components'
import Feature from './containers/features/Features';
import './App.css'



const App = () => {
  return (
    <div className="App">


      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <Smartsoil />
      <Features />
      <Feature />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
   
      
    </div>
  )
}

export default App

