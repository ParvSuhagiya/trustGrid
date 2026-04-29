import { useState } from 'react';
import { Box } from '@mui/material';
import { C, INITIAL_ITEMS } from './inventoryData';
import InventoryTableToolbar from './InventoryTableToolbar';
import InventoryTableRow from './InventoryTableRow';
import InventoryTablePagination from './InventoryTablePagination';

const COLUMN_HEADERS = ['Item & Grade', 'Stock Level', 'Status', 'Actions'];
const COL_WIDTHS = ['35%', '30%', '15%', '20%'];
const TOTAL_PAGES = 2;

/**
 * InventoryTable
 * Orchestrates the right-panel inventory section:
 *   InventoryTableToolbar  — title + filter/download buttons
 *   InventoryTableRow      — one row per supply item
 *   InventoryTablePagination — footer count + page controls
 *
 * Props:
 *   items        — supply objects (falls back to INITIAL_ITEMS seed data)
 *   onDelete(id) — callback when a row's delete button is clicked
 *   onEdit(id)   — callback when a row's edit button is clicked
 */
const InventoryTable = ({ items: externalItems, onDelete, onEdit }) => {
  const [page, setPage] = useState(1);
  const items = externalItems ?? INITIAL_ITEMS;

  return (
    <Box component="section" sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>

      {/* ── Title + action buttons ── */}
      <InventoryTableToolbar />

      {/* ── Table card ── */}
      <Box
        sx={{
          backgroundColor: '#000',
          border: `1px solid ${C.outline}`,
          borderRadius: '8px',
          overflow: 'hidden',
        }}
      >
        <Box
          component="table"
          sx={{ width: '100%', borderCollapse: 'collapse', tableLayout: 'fixed' }}
        >
          {/* Column headers */}
          <Box component="thead">
            <Box component="tr" sx={{ borderBottom: `1px solid ${C.outline}` }}>
              {COLUMN_HEADERS.map((h, i) => (
                <Box
                  component="th"
                  key={h}
                  sx={{
                    px: 3,
                    py: 2,
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '0.625rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.15em',
                    color: C.muted,
                    textAlign: i === COLUMN_HEADERS.length - 1 ? 'right' : 'left',
                    width: COL_WIDTHS[i],
                  }}
                >
                  {h}
                </Box>
              ))}
            </Box>
          </Box>

          {/* Rows */}
          <Box component="tbody">
            {items.map((item) => (
              <InventoryTableRow
                key={item.id}
                item={item}
                onEdit={onEdit}
                onDelete={onDelete}
              />
            ))}
          </Box>
        </Box>

        {/* ── Pagination footer ── */}
        <InventoryTablePagination
          totalShown={items.length}
          totalCount={24}
          page={page}
          totalPages={TOTAL_PAGES}
          onPageChange={setPage}
        />
      </Box>
    </Box>
  );
};

export default InventoryTable;
