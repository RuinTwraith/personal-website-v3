import useImage from '../../hooks/useImage'

const Image = (props) => {
  const {
    path,
    customClass = '',
    hasHoverEffect = false,
    alt = 'project',
    file = ''
  } = props

  const { image, error, src } = useImage({ path, file })
  console.log('src', src)
  return (
    <img
      src={src}
      alt={alt}
      className={`image ${customClass} ${hasHoverEffect ? 'image--hover' : ''}`}
    />
  )
}

export default Image
