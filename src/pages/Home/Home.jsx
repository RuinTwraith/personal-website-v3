import Hero from '../../components/Hero'
import Header from '../../components/Header'
import Section from '../../components/Section'
import { projects } from '../../data/data.json'

const Home = () => {
  return (
    <>
      <Hero />
      <Section {...projects} />
      {/* Add download icon and view icon for images */}
      {/* <Section {...artWorks} /> */}
    </>
  )
}

export default Home
