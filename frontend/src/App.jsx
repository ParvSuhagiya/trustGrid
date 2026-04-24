import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LandingPage from './LandingPage'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import BuyerDashboard from './pages/BuyerDashboard'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/buyer-dashboard" element={<BuyerDashboard />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
