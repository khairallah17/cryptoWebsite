import './styles/global.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Index from './pages/index'
import Cryptocurrencies from './pages/Cryptocurrencies'
import Contact from './pages/Contact'
import ContactInfo from './pages/ContactInfo'
import PrivacyPolicy from './pages/PrivacyPolicy'
import About from './pages/About'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index/>}/>
        <Route path="/cryptocurrencies" element={<Cryptocurrencies/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/contacts/*" element={<ContactInfo/>}/>
        <Route path='/privacyPolicy' element={<PrivacyPolicy/>} />
        <Route path='/about' element={<About/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
