import React from 'react'
import './card.scss'
import linkImg from '../../assets/icons/link.png'
import background from '../../assets/bg.jpg'
import useImage from '../../hooks/useImage'
import '../../styles/_utility.scss'

const Card = ({ name, description, link, folder, fileName, customClass }) => {
  const { image, error } = useImage({ folder, fileName })

  return (
    <div className="card">
      {(error && (
        <img
          src={background}
          alt="project 1"
          className={`card__img ${customClass} ${
            description && 'card__img--hover'
          }`}
        />
      )) || (
        <img
          src={image}
          alt="project 1"
          className={`card__img ${customClass} ${
            description && 'card__img--hover'
          }`}
        />
      )}
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
