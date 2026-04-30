import { useState, useEffect } from 'react';
import { Box, CircularProgress } from '@mui/material';
import InventoryPageHeader from '../components/SupplierDashboard/Inventory/InventoryPageHeader';
import AddSupplyForm from '../components/SupplierDashboard/Inventory/AddSupplyForm';
import InventoryTable from '../components/SupplierDashboard/Inventory/InventoryTable';
import InventoryAnalyticsCards from '../components/SupplierDashboard/Inventory/InventoryAnalyticsCards';
import { apiFetch } from '../utils/api';

/**
 * SupplierInventory — child route at /supplier-dashboard/inventory
 * Sidebar and Topbar come from SupplierDashboardLayout — only this content changes.
 *
 * Layout:
 *   ┌─────────────────────────────────────────┐
 *   │  InventoryPageHeader (full width)        │
 *   ├──────────────┬──────────────────────────┤
 *   │ AddSupplyForm│ InventoryTable            │
 *   │   (4 cols)   │ InventoryAnalyticsCards   │
 *   │              │   (8 cols)                │
 *   └──────────────┴──────────────────────────┘
 */
const SupplierInventory = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchInventory = async () => {
    try {
      const data = await apiFetch('/api/supplier/inventory');
      setItems(data);
    } catch (error) {
      console.error('Failed to fetch inventory:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchInventory();
  }, []);

  const handleAdd = async (item) => {
    try {
      await apiFetch('/api/supplier/inventory', {
        method: 'POST',
        body: JSON.stringify(item),
      });
      fetchInventory(); // Refresh list
    } catch (error) {
      console.error('Failed to add supply:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await apiFetch(`/api/supplier/inventory/${id}`, {
        method: 'DELETE',
      });
      fetchInventory(); // Refresh list
    } catch (error) {
      console.error('Failed to delete supply:', error);
    }
  };

  const handleEdit = (id) => {
    console.log('Edit supply id:', id);
    // Future edit modal logic here
  };

  if (loading) {
    return <Box sx={{ display: 'flex', justifyContent: 'center', pt: 10 }}><CircularProgress color="success" /></Box>;
  }

  return (
    <Box
      sx={{
        px: { xs: 3, md: 5 },
        pt: 5,
        pb: 8,
        backgroundColor: '#000',
        minHeight: '100%',
        /* Thin scrollbar */
        '&::-webkit-scrollbar': { width: 4 },
        '&::-webkit-scrollbar-track': { background: '#000' },
        '&::-webkit-scrollbar-thumb': { background: '#333', borderRadius: 10 },
      }}
    >
      {/* ── Page Title + Stat Cards ── */}
      <InventoryPageHeader />

      {/* ── Main two-column grid ── */}
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', lg: '4fr 8fr' },
          gap: 4,
          alignItems: 'start',
        }}
      >
        {/* Left: Add Supply Form */}
        <AddSupplyForm onAdd={handleAdd} />

        {/* Right: Table + analytics */}
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
          <InventoryTable items={items} onDelete={handleDelete} onEdit={handleEdit} />
          <InventoryAnalyticsCards />
        </Box>
      </Box>
    </Box>
  );
};

export default SupplierInventory;
