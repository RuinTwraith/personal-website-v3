import { useEffect, useState } from 'react'

const useImage = ({ path }) => {
  const [error, setError] = useState(null)
  const [image, setImage] = useState(null)

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const imagePath = `../assets/${path}`
        const response = await import(imagePath)
        setImage(response.default)
      } catch (err) {
        setError(err)
      }
    }

    fetchImage()
  }, [path])
  return {
    error,
    image
  }
}

export default useImage
