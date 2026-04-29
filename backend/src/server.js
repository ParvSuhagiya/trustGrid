const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const buyerRoutes = require('./routes/buyerRoutes');
const supplierRoutes = require('./routes/supplierRoutes');
const supplierActionRoutes = require('./routes/supplierActionRoutes');
const requestRoutes = require('./routes/requestRoutes');
const dashboardRoutes = require('./routes/dashboardRoutes');
const notificationRoutes = require('./routes/notificationRoutes');
const activityRoutes = require('./routes/activityRoutes');
const Supplier = require('./models/Supplier');

// Load env vars
dotenv.config();

// Connect to database
connectDB();

const app = express();

// Body parser
app.use(express.json());

// Mount routers
app.use('/api/auth', authRoutes);
app.use('/api/buyer', buyerRoutes);
app.use('/api/suppliers', supplierRoutes);
app.use('/api/supplier', supplierActionRoutes);
app.use('/api/requests', requestRoutes);
app.use('/api/dashboard', dashboardRoutes);
app.use('/api/notifications', notificationRoutes);
app.use('/api/activity', activityRoutes);

// Base route for testing
app.get('/', (req, res) => {
  res.send('API is running...');
});

// Seed Dummy Suppliers Function
const seedSuppliers = async () => {
  try {
    const count = await Supplier.countDocuments();
    if (count === 0) {
      console.log('Seeding dummy suppliers...');
      await Supplier.insertMany([
        {
          name: 'Global Tech Supplies',
          rating: 4.8,
          category: 'Electronics',
          description: 'High quality electronics and components for enterprise.'
        },
        {
          name: 'Apex Manufacturing',
          rating: 4.5,
          category: 'Machinery',
          description: 'Industrial machinery and raw manufacturing parts.'
        },
        {
          name: 'Eco Materials Inc.',
          rating: 4.9,
          category: 'Raw Materials',
          description: 'Sustainable and eco-friendly packaging materials.'
        }
      ]);
      console.log('Dummy suppliers seeded successfully!');
    }
  } catch (error) {
    console.error('Error seeding suppliers:', error);
  }
};

const PORT = process.env.PORT || 5000;

app.listen(PORT, async () => {
  console.log(`Server running on port ${PORT}`);
  await seedSuppliers();
});
