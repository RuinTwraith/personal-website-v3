import React from 'react'
import './card.scss'
import linkImg from '../../assets/icons/link.png'
import Image from '../Image'
import '../../styles/_utility.scss'

const Card = ({
  name,
  description,
  link,
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
        {/* TODO: add project link */}
        {link && (
          <a href="#" target="_blank" className="card__link">
            <img src={linkImg} alt="link" className="card__link--img" />
          </a>
        )}
      </div>
      <div className="card__container">
        <Image
          folder={folder}
          fileName={fileName}
          customClass={customClass}
          hasHoverEffect={description}
        />
      </div>
      <div className="card__footer">
        {name && (
          <div className={`card__text ${description && 'card__text--hover'}`}>
            <p className="card__name heading-font">{name}</p>
            <p className="card__description">{description}</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Card
