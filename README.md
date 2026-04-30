# TrustGrid — B2B Procurement Marketplace

A full-stack **B2B procurement platform** that connects buyers and suppliers through a live inventory-driven marketplace with real-time order management.

🔗 **Live Backend**: [https://trustgrid.onrender.com](https://trustgrid.onrender.com)
🎨 **Figma Design**: [View Design](https://www.figma.com/design/NPQq2cWNJDJLFPOdHq6RiE/Untitled?node-id=0-1&t=OYYOmA4SDKInHYc1-1)
📁 **GitHub**: [ParvSuhagiya/trustGrid](https://github.com/ParvSuhagiya/trustGrid)

---

## 🚀 Overview

TrustGrid solves the problem of *"Which supplier can I actually trust?"* by providing a transparent, verified procurement loop:

1. **Buyers** browse the marketplace, view live supplier inventory, and place material requests.
2. **Suppliers** manage their inventory and accept or reject incoming orders.
3. Both sides track activity through their respective dashboards.

---

## ✨ Features

### 👤 Buyer Dashboard
- 📊 **Metrics Dashboard** — Live stats: total requests, active orders, completed orders, total spend
- 🏪 **Marketplace** — Browse all registered suppliers with category, rating, and availability
- 🔍 **Supplier Profiles** — View live inventory, ratings, reviews, and performance metrics
- 📦 **Place Orders** — Request specific materials from supplier inventory with quantity validation and real-time budget calculation
- 📋 **Orders Page** — Track all requests with status: `Pending`, `Accepted`, `Rejected`
- ⭐ **Rate Suppliers** — Submit feedback after order completion

### 🏭 Supplier Dashboard
- 📦 **Inventory Management** — Add, view, and delete products/supplies with category, quantity, and price
- 📥 **Buyer Requests** — View all incoming material requests with buyer info and quantity
- ✅ **Accept / Reject Orders** — Accepting an order automatically deducts inventory quantity
- 📊 **Analytics** — Inventory analytics cards showing stock health

---

## 🏗️ Tech Stack

| Layer | Technology |
|---|---|
| **Frontend** | React 18 (Vite), Material UI (MUI), React Router v6 |
| **Styling** | Tailwind CSS v4 + MUI dark theme |
| **Backend** | Node.js, Express.js v5 |
| **Database** | MongoDB (Atlas), Mongoose ODM |
| **Auth** | JWT (JSON Web Tokens), custom `crypto` (pbkdf2Sync) for password hashing |
| **Deployment** | Render (backend), Vite dev server (frontend) |

---

## 📂 Project Structure

```
trustGrid/
├── backend/
│   └── src/
│       ├── config/          # MongoDB connection
│       ├── controllers/     # authController, supplierController, inventoryController,
│       │                    # requestController, dashboardController, ...
│       ├── middleware/      # authMiddleware (JWT), roleMiddleware (buyer/supplier)
│       ├── models/          # User, Supplier, Supply, Request, Notification, ActivityLog
│       ├── routes/          # authRoutes, supplierRoutes, supplierActionRoutes,
│       │                    # requestRoutes, buyerRoutes, dashboardRoutes, ...
│       ├── utils/           # crypto helpers
│       └── server.js        # Entry point
│
└── frontend/
    └── src/
        ├── components/
        │   ├── BuyerDashboard/    # Marketplace, SupplierProfile, Orders, RateSupplier
        │   └── SupplierDashboard/ # Inventory, Orders, Marketplace components
        ├── context/          # AuthContext (JWT storage + user state)
        ├── layouts/          # BuyerDashboardLayout, SupplierDashboardLayout (with Outlet)
        ├── pages/            # BuyerDashboardHome, BuyerMarketplace, SupplierInventory,
        │                     # SupplierProfilePage, RateSupplierPage, ...
        ├── utils/            # apiFetch (auth header injection)
        └── App.jsx           # React Router config with role-based ProtectedRoutes
```

---

## 🔐 Authentication & Roles

- **Signup/Login** returns a JWT token stored in `localStorage`
- All protected API routes require `Authorization: Bearer <token>` header
- Two roles: `buyer` and `supplier` — each sees their own dashboard
- Supplier accounts automatically get a public `Supplier` profile on registration

---

## 🔌 API Endpoints

| Method | Endpoint | Access | Description |
|---|---|---|---|
| `POST` | `/api/auth/signup` | Public | Register user (auto-creates Supplier profile if role=supplier) |
| `POST` | `/api/auth/login` | Public | Login and receive JWT |
| `GET` | `/api/suppliers` | Buyer | List all suppliers |
| `GET` | `/api/suppliers/:id` | Buyer | Get supplier profile |
| `GET` | `/api/suppliers/:id/inventory` | Buyer | Get supplier's live inventory |
| `GET` | `/api/supplier/inventory` | Supplier | Get own inventory |
| `POST` | `/api/supplier/inventory` | Supplier | Add inventory item |
| `DELETE` | `/api/supplier/inventory/:id` | Supplier | Remove inventory item |
| `POST` | `/api/requests` | Buyer | Create a material request |
| `GET` | `/api/requests` | Buyer/Supplier | List requests (filtered by role) |
| `PATCH` | `/api/requests/:id/status` | Supplier | Accept/reject a request (deducts inventory) |
| `GET` | `/api/dashboard/metrics` | Buyer | Get live dashboard metrics |

---

## ⚡ Getting Started (Local Development)

### 1. Clone the repo

```bash
git clone https://github.com/ParvSuhagiya/trustGrid.git
cd trustGrid
```

### 2. Setup Backend

```bash
cd backend
npm install
```

Create a `.env` file inside `/backend`:

```env
PORT=5000
MONGO_URI=your_mongodb_atlas_connection_string
JWT_SECRET=your_secret_key
```

Start the backend:

```bash
npm run dev
```

### 3. Setup Frontend

```bash
cd frontend
npm install
npm run dev
```

The Vite proxy in `vite.config.js` forwards all `/api/*` calls to the backend. By default it points to the deployed backend (`https://trustgrid.onrender.com`). To use your local backend instead, update the proxy target in `vite.config.js`:

```js
target: 'http://localhost:5000',
```

---

## 🗄️ Data Models

### User
```
{ name, email, passwordHash, salt, role: 'buyer' | 'supplier' }
```

### Supplier
```
{ userId, name, category, description, rating }
```

### Supply (Inventory Item)
```
{ supplierId, productName, category, description, quantity, price }
```

### Request (Order)
```
{ buyerId, supplierId, supplyId, productName, quantity, budget,
  status: 'pending' | 'accepted' | 'rejected' | 'completed', description }
```

---

## 🔮 Future Improvements

- 🤖 AI-based supplier recommendations
- 💬 Real-time buyer-supplier chat (Socket.io)
- 📊 Advanced spend analytics with charts
- 🏆 Supplier trust score & ranking leaderboard
- 🚨 Fraud detection system
- 📧 Email notifications for order status updates
