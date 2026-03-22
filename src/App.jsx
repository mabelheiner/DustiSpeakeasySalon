import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import salonLogoImage from '/src/assets/img/Dusti’s_Speakeasy_Salon_Logo.png'

function App() {

  return (
    <>
    <header className='home-header' style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
      <section className='home-image'>
        <img src={salonLogoImage} alt="Logo for Dusti's Speakeasy Salon" style={{maxHeight: 150, borderRadius: 8}} />
      </section>
      <section className='home-bio' style={{background: 'white', opacity: .5, borderRadius: 8, margin: 8, padding: 8}}>
        <h1>Welcome to Dusti's Speakeasy Salon</h1>
        <p> 
          Welcome to Dusti's Speakeasy! Rensselaer’s spot for good cuts, and good company. We’re a walk-in-friendly salon where the conversation flows as easily as the clippers. <br />
          Mobile services available by appointment. <br />
          Storefront Coming Jan 2027!
          </p>
      </section>
      </header>
    </>
  )
}

export default App
