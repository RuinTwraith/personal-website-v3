import React from 'react'
import './section.scss'
import Card from '../Card'
import PhotoSection from '../PhotoSection/PhotoSection'

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
    <div className={`section ${isPhotoSection && 'photos-background'}`}>
      <div className="section__container">
        <h1 className="section__heading">{title}</h1>
        <h4 className="section__text">{description}</h4>
        {isPhotoSection ? (
          <PhotoSection folder={folder} data={data} />
        ) : (
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
        )}
      </div>
    </div>
  )
}

export default Section
