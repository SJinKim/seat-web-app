import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { SeatScreen, Home, Statistic } from './screens'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
      <Routes>
        <Route path='seatscreen' element={<SeatScreen />} />
      </Routes>
      <Routes>
        <Route path='statistic' element={<Statistic />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
