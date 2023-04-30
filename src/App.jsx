import './styles/global.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Index from './pages/index'
import Cryptocurrencies from './pages/Cryptocurrencies'
import Contact from './pages/Contact'
import PrivacyPolicy from './pages/PrivacyPolicy'
import About from './pages/About'
import Sell from './pages/Contact/Sell'
import Buy from './pages/Contact/Buy'
import OtherInquiries from './pages/Contact/OtherInquieries'
import AfterTrade from './pages/Contact/AfterTrade'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index/>}/>
        <Route path="/market" element={<Cryptocurrencies/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="contact/sell" element={<Sell/>}/>
        <Route path="contact/buy" element={<Buy/>}/>
        <Route path="contact/otherinquieries" element={<OtherInquiries/>}/>
        <Route path="contact/afterTrade" element={<AfterTrade/>}/>
        <Route path='/privacyPolicy' element={<PrivacyPolicy/>} />
        <Route path='/about' element={<About/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
