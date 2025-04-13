import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import ApplyJob from './pages/ApplyJob'
import Applications from './pages/Applications'

const App = () => {
  return (
    <div>
      {/* this section manages all the routes in this application allowing users to navigate from one page to another */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/apply-job/:id' element={<ApplyJob />} />
        <Route path='/applications' element={<Applications />} />
          
      </Routes>
    </div>
  )
}

export default App
