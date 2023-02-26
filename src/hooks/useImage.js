import { useEffect, useState } from 'react'

const useImage = ({ folder, fileName }) => {
  const [error, setError] = useState(null)
  const [image, setImage] = useState(null)

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await import(`../assets/${folder}/${fileName}`)
        setImage(response.default)
      } catch (err) {
        setError(err)
      }
    }

    fetchImage()
  }, [folder, fileName])

  return {
    error,
    image,
  }
}

export default useImage
