import { Grid } from '@mui/material';
import OrderCard from './OrderCard';
import NewRequestCard from './NewRequestCard';
import ordersData from './ordersData';

/**
 * RequestsGrid
 * Renders the responsive card grid:
 *  - One OrderCard per item in ordersData
 *  - NewRequestCard as the final grid cell
 *
 * Layout: 1 col (xs) → 2 cols (md) → 3 cols (xl)
 */
const RequestsGrid = () => (
  <Grid container spacing={3}>
    {ordersData.map((order) => (
      <Grid item xs={12} md={6} xl={4} key={order.title}>
        <OrderCard {...order} />
      </Grid>
    ))}

    {/* CTA card always last */}
    <Grid item xs={12} md={6} xl={4}>
      <NewRequestCard />
    </Grid>
  </Grid>
);

export default RequestsGrid;
