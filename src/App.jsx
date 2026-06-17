import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import NasaList from './components/NasaList'
import Sobre from './pages/Sobre'
import NotFound from './pages/NotFound'
import AsteroideDetails from './pages/AsteroideDetails'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Navbar />

      <Routes>
        <Route path="/" element={<NasaList />} />
        <Route path="/sobre" element={<Sobre />} />

        <Route path="/asteroide/:id" element={<AsteroideDetails />} />

        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </BrowserRouter >
  )
}

export default App