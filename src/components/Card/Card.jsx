import React from 'react'
import './card.scss'
import linkImg from '../../assets/icons/link.png'
import Image from '../Image'
import '../../styles/_utility.scss'

const Card = ({ name, description, link, folder, fileName, customClass }) => {
  return (
    <div className="card">
      <Image
        folder={folder}
        fileName={fileName}
        customClass={customClass}
        hasHoverEffect={description}
      />
      {link && (
        <p className="card__link">
          <img src={linkImg} alt="" className="card__link--img" />
          link
        </p>
      )}

      {name && (
        <div className={`card__text ${description && 'card__text--hover'}`}>
          <h2 className="card__heading">{name}</h2>
          <p className="card__description">{description}</p>
        </div>
      )}
    </div>
  )
}

export default Card
