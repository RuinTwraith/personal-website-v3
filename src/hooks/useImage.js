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
import bokeh from '../assets/photos/bokeh.webp'
import bungee from '../assets/photos/bungee.webp'
import chameraDam from '../assets/photos/chamera-dam.webp'
import christChurch from '../assets/photos/christ-church.webp'
import dainkundPeak from '../assets/photos/dainkund-peak.webp'
import ganga from '../assets/photos/ganga.webp'
import hajiAli from '../assets/photos/haji-ali.webp'
import me from '../assets/photos/me.webp'
import oberoi from '../assets/photos/oberoi.webp'
import rabbit from '../assets/photos/rabbit.webp'
import raniJhansi from '../assets/photos/rani-jhansi.webp'
import seagull1 from '../assets/photos/seagull-1.webp'
import seagull2 from '../assets/photos/seagull-2.webp'
import shimla1 from '../assets/photos/shimla-1.webp'
import shimla2 from '../assets/photos/shimla-2.webp'
import shimla3 from '../assets/photos/shimla-3.webp'
import shimlaMallRoad1 from '../assets/photos/shimla-mall-road-1.webp'
import shimlaMallRoad2 from '../assets/photos/shimla-mall-road-2.webp'
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
    bokeh,
    bungee,
    chameraDam,
    christChurch,
    dainkundPeak,
    ganga,
    hajiAli,
    me,
    oberoi,
    rabbit,
    raniJhansi,
    seagull1,
    seagull2,
    shimla1,
    shimla2,
    shimla3,
    shimlaMallRoad1,
    shimlaMallRoad2,
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
