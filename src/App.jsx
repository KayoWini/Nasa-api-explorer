import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import NasaList from './components/NasaList'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Navbar />

      <Routes>
        <Route path="/" element={<NasaList />} />
        <Route path="/sobre" element={<p>Página Sobre</p>} />
        <Route path="*" element={<p>404 - Página não encontrada</p>} />
      </Routes>

      <Footer />
    </BrowserRouter >
  )
}

export default App