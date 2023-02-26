import './App.scss'
import Header from './components/Header'
import Hero from './components/Hero'
import Section from './components/Section'
import { projects, artWorks, photos } from './data/data'

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Section {...projects} />
      {/* Add download icon and view icon for images */}
      <Section {...artWorks} />
      <Section {...photos} />
    </div>
  )
}

export default App
