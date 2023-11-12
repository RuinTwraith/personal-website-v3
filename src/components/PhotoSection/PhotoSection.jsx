// import { useState, useEffect } from 'react'
import './PhotoSection.scss'
import Image from '../Image'
// import downArrow from '../../assets/icons/down-arrow.png'

// const noOfColumns = 3

const PhotoSection = ({ data, folder }) => {
  // const [isShowMore, setIsShowMore] = useState(false)
  // const splitPhotos = []
  // const itemsPerColumn = Math.floor(data.length / noOfColumns)
  // for (let i = 0; i < noOfColumns; i++) {
  //   const photos = data.slice(i * itemsPerColumn, (i + 1) * itemsPerColumn)
  //   splitPhotos.push(photos)
  // }

  // useEffect(() => {
  //   document.documentElement.style.setProperty('--no-of-columns', noOfColumns)
  // }, [])

  // const handleShowMore = () => {
  //   setIsShowMore(true)
  //   document.documentElement.style.setProperty('--body-max-height', '100%')
  //   document.documentElement.style.setProperty('--body-overflow:', 'auto')
  // }

  // const handleShowLess = () => {
  //   setIsShowMore(false)
  //   const maxHeight = document.documentElement.style.getPropertyValue(
  //     '--default-body-max-height'
  //   )
  //   document.documentElement.style.setProperty('--body-max-height', maxHeight)
  //   document.documentElement.style.setProperty('--body-overflow:', 'hidden')
  // }

  return (
    <div className="photo">
      <h4 className="photo__text">
        I often upload to{' '}
        <a
          href="https://unsplash.com/@ruin_firefly"
          target="_blank"
          rel="noreferrer"
          className="link"
        >
          Unsplash
        </a>{' '}
        and{' '}
        <a
          href="https://www.instagram.com/dibbendu.k"
          target="_blank"
          rel="noreferrer"
          className="link"
        >
          Instagram
        </a>
        .
      </h4>
      <div className="photo__body">
        {data.map((photos, index) => (
          <div className="photo__body-col" key={index}>
            {photos.map((item, i) => (
              <div className="photo__body--img" key={i}>
                <Image file={item.file} path={`${folder}/${item.fileName}`} />
                {/* <p className="photo__body--img-caption">{item.name}</p> */}
              </div>
            ))}
          </div>
        ))}
      </div>
      {/* {!isShowMore && (
        <div className="photo__footer" onClick={handleShowMore}>
          <div className="photo__footer-container">
            <p className="photo__footer-text">show more</p>
            <img src={downArrow} alt="" className="photo__footer-icon" />
          </div>
        </div>
      )}
      {isShowMore && (
        <div className="photo__footer no-background" onClick={handleShowLess}>
          <div className="photo__footer-container">
            <p className="photo__footer-text">show less</p>
          </div>
        </div>
      )} */}
    </div>
  )
}

export default PhotoSection
