import useImage from '../../hooks/useImage'
import background from '../../assets/bg.jpg'

const Image = (props) => {
  const { path, customClass, hasHoverEffect } = props
  const { image, error } = useImage({ path })

  return (
    <>
      {(error && (
        <img
          src={background}
          alt="project"
          className={`image ${customClass} ${hasHoverEffect && 'image--hover'}`}
        />
      )) || (
        <img
          src={image}
          alt="project"
          className={`image ${customClass} ${hasHoverEffect && 'image--hover'}`}
        />
      )}
    </>
  )
}

export default Image
