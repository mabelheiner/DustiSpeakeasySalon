import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import salonLogoImage from '/src/assets/img/Dusti’s_Speakeasy_Salon_Logo.png'

function App() {

  return (
    <>
    <header className='home-header'>
      <section className='home-image'>
        <img src={salonLogoImage} alt="Logo for Dusti's Speakeasy Salon" />
      </section>
      <section className='home-bio'>
        <h1>Welcome to Dusti's Speakeasy Salon</h1>
        <p> 
          Welcome to Dusti's Speakeasy! Rensselaer’s spot for good cuts, and good company. We’re a walk-in-friendly salon where the conversation flows as easily as the clippers. <br />
          Mobile services available by appointment. <br />
          Storefront Coming Jan 2027!
          </p>
      </section>
      </header>
      <main className='main-menu'>
        <h1>Salon Price List</h1>

        <h2>Cut & Finish</h2>

        <section className='haircut-and-finishes-table-row'>
          <p>Standard Cut</p>
          <p>$25</p>
        </section>

        <section className='haircut-and-finishes-table-row'>
          <p>Hero Cut</p>
          <p>$20</p>
        </section>

        <section className='haircut-and-finishes-table-row'>
          <p>Buz Cut</p>
          <p>$15</p>
        </section>

        <section className='haircut-and-finishes-table-row'>
          <p>Beard Tailor</p>
          <p>$12</p>
        </section>

        <section className='haircut-and-finishes-table-row'>
          <p>Shampoo</p>
          <p>$10</p>
        </section>

        <section className='haircut-and-finishes-table-row'>
          <p>Blowout</p>
          <p>$20+</p>
        </section>

        <section className='haircut-and-finishes-table-row'>
          <p>Hot Tools</p>
          <p>$10+</p>
        </section>

        <h2>Color Services</h2>
        <section className='color-services-table-row'>
          <p>All Over Color</p>
          <p>$70+</p>
        </section>

        <section className='color-services-table-row'>
          <p>Partial Highlights</p>
          <p>$75+</p>
        </section>

        <section className='color-services-table-row'>
          <p>Full Highlights</p>
          <p>$120+</p>
        </section>

        <section className='color-services-table-row'>
          <p>Root Touchup</p>
          <p>$60+</p>
        </section>

        <section className='color-services-table-row'>
          <p>Conditioning Treatment</p>
          <p>$15+</p>
        </section>

        <section className='color-services-table-row'>
          <p>Protein Pack</p>
          <p>$30+</p>
        </section>

        <section className='contact-owner'>
          <h2>Contact</h2>

          <section className='contact-owner-information'>
            <p>623-312-0623</p>
            <p>dustispeakeasy@gmail.com</p>
            <p>Mobile service available by appointment only</p>
          </section>
        </section>
      </main>

      <footer>
        <p>&copy; 2026 Website Built and Deployed by Mabel Heiner</p>
      </footer>
    </>
  )
}

export default App
