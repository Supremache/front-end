import React from 'react'
import "./footer.css"

function Footer() {

  return (
    <footer className='flex'>
      <ul className='flex'>
        <li><a href="">About</a></li>
        <li><a href="">Projects</a></li>
        <li><a href="">Speaking</a></li>
        <li><a href="">Article</a></li>
      </ul> 

      <p>&copy; 2024 Copyright ByteBrain</p>
    </footer>
  )
}

export default Footer
