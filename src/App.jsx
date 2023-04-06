import './App.css'
import Header from './Components/Header'
import Home from './pages/Home'
import StartScreen from './pages/StartScreen'
import About from './pages/About'
import Details from './pages/Details'
import { BrowserRouter as Router, Routes, Route, BrowserRouter, Navigate } from 'react-router-dom'
import Tips from './pages/Tips'
import Error from './pages/Error'
import Footer from './Components/Footer'

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/about" element={<About />}></Route>
        <Route path="/tips" element={<Tips />}></Route>
        <Route path="/details" element={<Details />} ></Route>
        <Route path="/start" element={<StartScreen />}></Route>
        <Route path="/" element={<Home />}></Route>
        <Route path="/error" element={<Error />}></Route>
        <Route path='*' element={<Navigate to='/error' />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
