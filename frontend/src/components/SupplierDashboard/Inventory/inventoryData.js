import ScienceIcon from '@mui/icons-material/Science';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import OpacityIcon from '@mui/icons-material/Opacity';

/** Shared colour tokens used across all Inventory sub-components */
export const C = {
  accent:  '#22C55E',
  outline: '#333333',
  muted:   '#CCCCCC',
  error:   '#FF0000',
};

/** Seed rows that match the HTML prototype */
export const INITIAL_ITEMS = [
  {
    id: 1,
    icon: <ScienceIcon sx={{ fontSize: '1.25rem' }} />,
    iconColor: C.accent,
    name: 'Pure Nickel Pellets',
    sku: 'RAW-NKL-04',
    qty: '12,400.00 kg',
    stockPct: 75,
    status: 'In Stock',
  },
  {
    id: 2,
    icon: <PrecisionManufacturingIcon sx={{ fontSize: '1.25rem' }} />,
    iconColor: '#fff',
    name: 'Sintered Steel Wire',
    sku: 'MET-STL-09',
    qty: '4,250.50 kg',
    stockPct: 25,
    status: 'Low Stock',
  },
  {
    id: 3,
    icon: <OpacityIcon sx={{ fontSize: '1.25rem' }} />,
    iconColor: C.accent,
    name: 'Industrial Ethanol',
    sku: 'CHM-ETH-12',
    qty: '26,200.00 kg',
    stockPct: 100,
    status: 'In Stock',
  },
];
