import React from 'react'
import './section.scss'
import Card from '../Card'
import PhotoSection from '../PhotoSection'

const Section = ({
  id,
  title,
  description,
  data = [],
  folder,
  customClass = ''
}) => {
  const isPhotoSection = id === 'photos'

  return (
    <div
      className={`${isPhotoSection ? 'photos-section' : 'section full-width'}`}
    >
      <div className="section__container">
        <h1 className="section__heading heading-font">{title}</h1>
        <h4 className="section__text">{description}</h4>
        {isPhotoSection ? (
          <PhotoSection folder={folder} data={data} />
        ) : (
          <div className="section__cards">
            {data.map((dataObj, index) => (
              <Card
                key={index}
                index={++index < 10 ? `0${index}` : index}
                folder={folder}
                customClass={customClass}
                {...dataObj}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default Section
