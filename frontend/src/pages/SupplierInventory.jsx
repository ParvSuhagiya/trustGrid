import { Box } from '@mui/material';
import InventoryPageHeader from '../components/SupplierDashboard/Inventory/InventoryPageHeader';
import AddSupplyForm from '../components/SupplierDashboard/Inventory/AddSupplyForm';
import InventoryTable from '../components/SupplierDashboard/Inventory/InventoryTable';
import InventoryAnalyticsCards from '../components/SupplierDashboard/Inventory/InventoryAnalyticsCards';

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
  const handleAdd = (item) => {
    // TODO: wire to real state / API
    console.log('New supply added:', item);
  };

  const handleDelete = (id) => {
    console.log('Delete supply id:', id);
  };

  const handleEdit = (id) => {
    console.log('Edit supply id:', id);
  };

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
          <InventoryTable onDelete={handleDelete} onEdit={handleEdit} />
          <InventoryAnalyticsCards />
        </Box>
      </Box>
    </Box>
  );
};

export default SupplierInventory;
