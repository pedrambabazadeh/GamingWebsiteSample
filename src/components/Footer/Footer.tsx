import React from 'react'
import './footer.css'
import { Facebook, Instagram, LinkedIn } from '@mui/icons-material'

export default function Footer() {
  return (
    <footer
    data-radius = "sm"
    data-margin-top = "xl"
     className=''
     data-view="full-screen">
      <div className='grid-container'>
      <div id="footer-left">
        Contact us
        <ul>
          <li>
            <a href="mailto:web3@eternalharvest.app">
              Email us
            </a>
          </li>
        </ul>
      </div>
      <div id="footer-middle">
        <ul>
          <li>
            Home page
          </li>
          <li>
            About us
          </li>
          <li>
            Privacy Policy
          </li>
        </ul>
      </div>
      <div id="footer-left">
        social media
        <ul className='social-media-list'>
          <li>
              <a href='#'>
                <LinkedIn/>
              </a>
              <a href='#'>
                <Facebook/>
              </a>
              <a href='#'>
                <Instagram/>
              </a>
          </li>
        </ul>
      </div>
      </div>
    </footer>
  )
}
