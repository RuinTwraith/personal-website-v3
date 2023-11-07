import React from 'react'
import './card.scss'
import linkImg from '../../assets/icons/link.svg'
import Image from '../Image'
import '../../styles/_utility.scss'

const Card = ({
  name,
  description,
  info,
  folder,
  fileName,
  customClass,
  index,
  type
}) => {
  return (
    <div className="card">
      <div className="card__header">
        <div className="card__title heading-font">
          {index && <p className="card__index">{index}</p>}
          <p className="card__type">{type}</p>
        </div>
      </div>
      <div className="card__container">
        <Image
          path={`${folder}/${fileName}`}
          customClass={customClass}
          hasHoverEffect={description}
        />
      </div>
      <div className="card__footer">
        {name && (
          <div className={`card__text ${description && 'card__text--hover'}`}>
            {/* TODO: add project link */}
            <a href="#" target="_blank" className="card__name heading-font">
              {name}
              <img src={linkImg} alt="link" className="card__link-img" />
            </a>
            {Array.isArray(description) ? (
              <ul className="card__description-container">
                {description.map((text, index) => (
                  <li key={index} className="card__description">
                    {text}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="card__description">{description}</p>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export default Card
