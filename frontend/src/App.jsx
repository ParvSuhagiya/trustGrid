import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LandingPage from './LandingPage'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import BuyerDashboardLayout from './layouts/BuyerDashboardLayout'
import BuyerDashboardHome from './pages/BuyerDashboardHome'
import BuyerMarketplace from './pages/BuyerMarketplace'
import BuyerOrders from './pages/BuyerOrders'
import SupplierDashboard from './pages/SupplierDashboard'
import SupplierProfilePage from './pages/SupplierProfilePage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />

        {/* Buyer Dashboard — nested layout with shared sidebar + topbar */}
        <Route path="/buyer-dashboard" element={<BuyerDashboardLayout />}>
          <Route index element={<BuyerDashboardHome />} />
          <Route path="marketplace" element={<BuyerMarketplace />} />
          <Route path="marketplace/:supplierId" element={<SupplierProfilePage />} />
          <Route path="orders" element={<BuyerOrders />} />
        </Route>

        <Route path="/supplier-dashboard" element={<SupplierDashboard />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
