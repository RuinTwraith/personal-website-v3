import React from 'react'
import './section.scss'
import Card from '../Card'

const Section = ({
  title,
  description,
  data = [],
  folder,
  customClass = ''
}) => {
  return (
    <div className="section">
      <div className="section__container">
        <h1 className="section__heading">{title}</h1>
        <h4 className="section__text">{description}</h4>
        <div className="section__cards">
          {data.map((dataObj, index) => (
            <Card
              key={index}
              folder={folder}
              customClass={customClass}
              {...dataObj}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Section
