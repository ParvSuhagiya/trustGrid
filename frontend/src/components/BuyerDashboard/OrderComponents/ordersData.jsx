import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import MemoryIcon from '@mui/icons-material/Memory';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import ViewInArIcon from '@mui/icons-material/ViewInAr';
import BoltIcon from '@mui/icons-material/Bolt';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import ScheduleIcon from '@mui/icons-material/Schedule';
import EditIcon from '@mui/icons-material/Edit';
import DownloadIcon from '@mui/icons-material/Download';
import RefreshIcon from '@mui/icons-material/Refresh';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';

const PRIMARY = '#22C55E';

/**
 * ordersData
 * Static list of buyer order objects consumed by RequestsGrid → OrderCard.
 * Icons are pre-instantiated JSX elements so the data stays serialisable-ish
 * while keeping the grid component free of business data.
 */
const ordersData = [
  {
    icon: <PrecisionManufacturingIcon />,
    status: 'Pending',
    title: 'Industrial Grade Steel Coils',
    quantity: '500 Metric Tons',
    date: 'Oct 24, 2023',
    locationIcon: <LocationOnIcon sx={{ fontSize: '0.875rem' }} />,
    locationLabel: 'Rotterdam Port',
    primaryAction: 'DETAILS',
    secondaryIcon: <EditIcon sx={{ fontSize: '1rem' }} />,
  },
  {
    icon: <MemoryIcon />,
    status: 'Accepted',
    title: 'AX-700 Semi-conductors',
    quantity: '12,000 Units',
    date: 'Oct 22, 2023',
    locationIcon: <LocationOnIcon sx={{ fontSize: '0.875rem' }} />,
    locationLabel: 'Shenzhen Hub',
    primaryAction: 'VIEW CONTRACT',
    secondaryIcon: <DownloadIcon sx={{ fontSize: '1rem' }} />,
  },
  {
    icon: <WaterDropIcon />,
    status: 'Rejected',
    title: 'Purified Ethylene Glycol',
    quantity: '5,000 Liters',
    date: 'Oct 20, 2023',
    locationIcon: <WarningAmberIcon sx={{ fontSize: '0.875rem' }} />,
    locationLabel: 'Compliance Issue',
    primaryAction: 'REVIEW REASON',
    secondaryIcon: <RefreshIcon sx={{ fontSize: '1rem' }} />,
  },
  {
    icon: <ViewInArIcon />,
    status: 'Accepted',
    title: 'Automated Sorting Array',
    quantity: '4 Units',
    date: 'Oct 18, 2023',
    locationIcon: <LocationOnIcon sx={{ fontSize: '0.875rem' }} />,
    locationLabel: 'Hamburg',
    primaryAction: 'VIEW CONTRACT',
    secondaryIcon: <MoreVertIcon sx={{ fontSize: '1rem' }} />,
  },
  {
    icon: <BoltIcon />,
    status: 'Pending',
    title: 'High-Density Battery Cells',
    quantity: '25,000 Units',
    date: 'Oct 17, 2023',
    locationIcon: <ScheduleIcon sx={{ fontSize: '0.875rem', color: PRIMARY }} />,
    locationLabel: 'Priority',
    primaryAction: 'DETAILS',
    secondaryIcon: <NotificationsActiveIcon sx={{ fontSize: '1rem' }} />,
  },
];

export default ordersData;
