// import { useEffect, useState } from 'react'

/* backgrounds */
import darkPaint from '../assets/background/dark-paint.jpg'
import nightCity from '../assets/background/night-city.jpg'

/* icons */
import github from '../assets/icons/github.svg'
import link from '../assets/icons/link.svg'

/* logo */
import logo from '../assets/logo/logo.png'

/* photos */
import christChurch from '../assets/photos/christ-church.webp'
import me from '../assets/photos/me.webp'
import seagull1 from '../assets/photos/seagull-1.webp'
import shimla1 from '../assets/photos/shimla-1.webp'
import shimla3 from '../assets/photos/shimla-3.webp'
import shimlaMallRoad1 from '../assets/photos/shimla-mall-road-1.webp'
import tajHotel from '../assets/photos/taj-hotel.webp'

/* projects */
import covid19 from '../assets/projects/covid-19.webp'
import eiPhotography from '../assets/projects/ei-photography.webp'
import geoVisualizer from '../assets/projects/geo-visualizer.webp'
import portfolio from '../assets/projects/portfolio.webp'
import sterlingHotels from '../assets/projects/sterling-hotels.webp'

const useImage = ({ file }) => {
  const imageObject = {
    darkPaint,
    nightCity,
    github,
    link,
    logo,
    christChurch,
    me,
    seagull1,
    shimla1,
    shimla3,
    shimlaMallRoad1,
    tajHotel,
    covid19,
    eiPhotography,
    geoVisualizer,
    portfolio,
    sterlingHotels
  }
  return { src: imageObject[file] }
}

// const useImage = ({ path }) => {
//   const [error, setError] = useState(null)
//   const [image, setImage] = useState(null)

//   useEffect(() => {
//     const fetchImage = async () => {
//       try {
//         const imagePath = `../assets/${path}`
//         const response = await import(imagePath)
//         setImage(response.default)
//       } catch (err) {
//         setError(err)
//       }
//     }

//     fetchImage()
//   }, [path])
//   return {
//     error,
//     image
//   }
// }

export default useImage
