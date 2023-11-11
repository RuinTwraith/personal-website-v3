import useImage from '../../hooks/useImage'

const Image = (props) => {
  const {
    path,
    customClass = '',
    hasHoverEffect = false,
    alt = 'project'
  } = props
  const { image, error } = useImage({ path })

  return (
    <img
      src={image}
      alt={alt}
      className={`image ${customClass} ${hasHoverEffect ? 'image--hover' : ''}`}
    />
  )
}

export default Image
