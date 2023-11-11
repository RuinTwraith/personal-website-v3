import './card.scss'
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
  github,
  link
}) => {
  return (
    <div className="card">
      <div className="card__header">
        <div className="card__title heading-font">
          {index && <p className="card__index">{index}.</p>}
          <p className="card__type">{info}</p>
        </div>
        {github && (
          <a href={github} target="_blank" rel="noreferrer" title="github link">
            <Image
              path="icons/github.svg"
              customClass="card__github-img"
              alt="github"
            />
          </a>
        )}
      </div>
      <div className="card__container">
        <Image
          path={`${folder}/${fileName}`}
          customClass={`${customClass} card__image`}
          hasHoverEffect={description}
        />
      </div>
      <div className="card__footer">
        {name && (
          <div className={`card__text ${description && 'card__text--hover'}`}>
            {/* TODO: add project link */}
            <a
              href={link}
              target="_blank"
              rel="noreferrer"
              className="card__name-container heading-font"
            >
              <p className="card__name" title={name}>
                {name}
              </p>
              <Image
                path="icons/link.svg"
                customClass="card__link-img"
                alt="link"
              />
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
