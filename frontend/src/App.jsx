import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import ProtectedRoute from './components/ProtectedRoute'
import LandingPage from './LandingPage'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import BuyerDashboardLayout from './layouts/BuyerDashboardLayout'
import BuyerDashboardHome from './pages/BuyerDashboardHome'
import BuyerMarketplace from './pages/BuyerMarketplace'
import BuyerOrders from './pages/BuyerOrders'
import RateSupplierPage from './pages/RateSupplierPage'
import SupplierDashboardLayout from './layouts/SupplierDashboardLayout'
import SupplierDashboardHome from './pages/SupplierDashboardHome'
import SupplierMarketplace from './pages/SupplierMarketplace'
import SupplierBuyerRequests from './pages/SupplierBuyerRequests'
import SupplierInventory from './pages/SupplierInventory'
import SupplierProfilePage from './pages/SupplierProfilePage'

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />

          {/* Buyer Dashboard — nested layout with shared sidebar + topbar */}
          <Route 
            path="/buyer-dashboard" 
            element={
              <ProtectedRoute allowedRoles={['buyer']}>
                <BuyerDashboardLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<BuyerDashboardHome />} />
            <Route path="marketplace" element={<BuyerMarketplace />} />
            <Route path="marketplace/:supplierId" element={<SupplierProfilePage />} />
            <Route path="orders" element={<BuyerOrders />} />
            <Route path="marketplace/:supplierId/rate" element={<RateSupplierPage />} />
          </Route>

          {/* Supplier Dashboard — nested layout with shared sidebar + topbar */}
          <Route 
            path="/supplier-dashboard" 
            element={
              <ProtectedRoute allowedRoles={['supplier']}>
                <SupplierDashboardLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<SupplierDashboardHome />} />
            <Route path="marketplace" element={<SupplierMarketplace />} />
            <Route path="orders" element={<SupplierBuyerRequests />} />
            <Route path="inventory" element={<SupplierInventory />} />
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
