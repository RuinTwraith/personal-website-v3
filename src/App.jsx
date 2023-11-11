import Layout from './pages/Layout'
import Home from './pages/Home'
import About from './pages/About'
import ErrorPage from './pages/ErrorPage'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="content-grid">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
