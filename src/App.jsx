import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import {FaPhone, FaLocationDot, FaEnvelope} from "react-icons/fa6";

import salonLogoImage from '/src/assets/img/Dusti’s_Speakeasy_Salon_Logo.png'

function App() {

  return (
    <section className='home-page-grid'>   
      <section className='home-image-grid'>
        <img src={salonLogoImage} alt="Logo for Dusti's Speakeasy Salon" />
      </section>     
      <section className='home-bio-grid'>
        <h1>Welcome to Dusti's Speakeasy Salon</h1>
        <p> 
          Welcome to Dusti's Speakeasy! Rensselaer’s spot for good cuts, and good company. We’re a walk-in-friendly salon where the conversation flows as easily as the clippers. <br />
          Mobile services available by appointment. <br />
          </p>

        <section className='home-bio-contact-info'>
          <section className='contact-option'>
            <a href='tel:12199642048' target='_blank' style={{textWrap: 'nowrap'}}>
            <FaPhone />
            <p>219-964-2048</p>
            </a>
          </section>
          <section className='contact-option'>
            <a href='https://maps.app.goo.gl/b2gfdjxmAyA224BeA' target='_blank'>
            <FaLocationDot />
            <p>212 W Harrison St, Rensselaer IN 47978</p>
            </a>
          </section>
          <section className='contact-option'>
            {/* <a href='mailto:dustispeakeasy@gmail.com' target='_blank'> */}
            <FaEnvelope />
            <p>dustispeakeasy@gmail.com</p>
            {/* </a> */}
          </section>
        </section>
      </section>
      <main className='main-menu-grid'>
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

        <h2>Waxing</h2>

        <section className='waxing-table-row'>
          <p>Eyebrows</p>
          <p>$12</p>
        </section>

        <section className='waxing-table-row'>
          <p>Lip</p>
          <p>$10</p>
        </section>

        <section className='waxing-table-row'>
          <p>Chin</p>
          <p>$10</p>
        </section>

        <section className='waxing-table-row'>
          <p>Underarm</p>
          <p>$25</p>
        </section>

        <section className='waxing-table-row'>
          <p>Half-Arm</p>
          <p>$20</p>
        </section>

        <section className='waxing-table-row'>
          <p>Full-Arm</p>
          <p>$35</p>
        </section>

        <section className='waxing-table-row'>
          <p>Bikini</p>
          <p>$35</p>
        </section>

        <section className='waxing-table-row'>
          <p>Half-Leg</p>
          <p>$45</p>
        </section>

        <section className='waxing-table-row'>
          <p>Full-Leg</p>
          <p>$65</p>
        </section>

        <section className='waxing-table-row'>
          <p>Back</p>
          <p>$40+</p>
        </section>

        <section className='waxing-table-row'>
          <p>Chest</p>
          <p>$30+</p>
        </section>
      </main>

      <footer className='home-footer-grid'>
        <p>&copy; 2026 Website Built and Deployed by Mabel Heiner</p>
      </footer>
    </section>
  )
}

export default App
