import React from 'react'
import './hero.scss'

const Hero = () => {
  return (
    <div className="herobox">
      <main className="herobox__container">
        <div className="herobox__left">
          <div className="web-dev">Web Developer</div>
          <div className="first-name">Dibbendu</div>
          <div className="last-name">Koley</div>
        </div>
        <div className="herobox__right">image</div>
      </main>
    </div>
  )
}

export default Hero
