import { useEffect, useState } from 'react'

const useImage = ({ path }) => {
  const [error, setError] = useState(null)
  const [image, setImage] = useState(null)

  useEffect(() => {
    const fetchImage = async () => {
      try {
        console.log('path', path)
        const response = await import(`../assets/${path}.webp`)
        console.log('response', response)
        setImage(response.default)
      } catch (err) {
        setError(err)
      }
    }

    // console.log('error', error)
    // console.log('image', image)
    fetchImage()
  }, [path])
  return {
    error,
    image
  }
}

export default useImage
