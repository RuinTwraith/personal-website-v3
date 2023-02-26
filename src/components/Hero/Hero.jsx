import React from 'react'
import './hero.scss'

const Hero = () => {
  return (
    <div className="herobox">
      <main className="herobox__container">
        <div className="herobox__left">
          <span className="greet">Hello, I'm</span>
          <span className="name">Dibbendu Koley.</span>
          <span className="web-dev">Web Developer.</span>
        </div>
      </main>
    </div>
  )
}

export default Hero
