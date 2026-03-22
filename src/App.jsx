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
      <section className='home-bio' style={{background: 'lightgray', opacity: .75, borderRadius: 8, margin: 8, padding: 8}}>
        <h1>Welcome to Dusti's Speakeasy Salon</h1>
        <p> 
          Welcome to Dusti's Speakeasy! Rensselaer’s spot for good cuts, and good company. We’re a walk-in-friendly salon where the conversation flows as easily as the clippers. <br />
          Mobile services available by appointment. <br />
          Storefront Coming Jan 2027!
          </p>
      </section>
      </header>
      <main className='main-menu' style={{background: 'lightgray', opacity: .75, borderRadius: 8, padding: 8, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '60%', margin: 'auto'}}>
        <h1>Salon Price List</h1>

        {/* <table style={{}}>
          <thead style={{textAlign: 'center'}}>
            <h2 style={{margin: 'auto'}}>Cut & Finish</h2>
          </thead>

          <tbody style={{}}>
            <tr>
              <td>Standard Cut</td>
              <td>$25</td>
            </tr>

            <tr>
              <td>Standard Cut</td>
              <td>$25</td>
            </tr>
          </tbody>
        </table> */}

        <h2>Cut & Finish</h2>

        <div className='table-row'>
          <p>Standard Cut</p>
          <p>$25</p>
        </div>

        <div className='table-row'>
          <p>Hero Cut</p>
          <p>$20</p>
        </div>

        <div className='table-row'>
          <p>Buz Cut</p>
          <p>$15</p>
        </div>

        <div className='table-row'>
          <p>Beard Tailor</p>
          <p>$12</p>
        </div>

        <div className='table-row'>
          <p>Shampoo</p>
          <p>$10</p>
        </div>

        <div className='table-row'>
          <p>Blowout</p>
          <p>$20+</p>
        </div>

        <div className='table-row'>
          <p>Hot Tools</p>
          <p>$10+</p>
        </div>

        <h2>Color Services</h2>
        <div className='table-row'>
          <p>All Over Color</p>
          <p>$70+</p>
        </div>

        <div className='table-row'>
          <p>Partial Highlights</p>
          <p>$75+</p>
        </div>

        <div className='table-row'>
          <p>Full Highlights</p>
          <p>$120+</p>
        </div>

        <div className='table-row'>
          <p>Root Touchup</p>
          <p>$60+</p>
        </div>

        <div className='table-row'>
          <p>Conditioning Treatment</p>
          <p>$15+</p>
        </div>

        <div className='table-row'>
          <p>Protein Pack</p>
          <p>$30+</p>
        </div>

        
      </main>
    </>
  )
}

export default App
