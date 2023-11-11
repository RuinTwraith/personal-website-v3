import useImage from '../../hooks/useImage'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'

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
    <LazyLoadImage
      src={src}
      alt={alt}
      effect="blur"
      placeholder={<span className="image">LOADING</span>}
      className={`image ${customClass} ${hasHoverEffect ? 'image--hover' : ''}`}
    />
  )
}

export default Image
