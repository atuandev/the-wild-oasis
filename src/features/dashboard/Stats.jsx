import {
  HiOutlineBanknotes,
  HiOutlineBriefcase,
  HiOutlineCalendarDays,
  HiOutlineChartBar,
} from 'react-icons/hi2';
import Stat from './Stat';
import { formatCurrency } from '../../utils/helpers';

function Stats({ bookings, confirmedStays, numDays, cabinCount }) {
  const numBookings = bookings.length;
  const sales = bookings.reduce((acc, cur) => acc + cur.totalPrice, 0);
  const checkIns = confirmedStays?.length;
  const occupancy =
    confirmedStays.reduce((acc, cur) => acc + cur.numNights, 0) /
    (numDays * cabinCount);

  return (
    <>
      <Stat
        icon={<HiOutlineBriefcase />}
        title='Bookings'
        color='blue'
        value={numBookings}
      />
      <Stat
        icon={<HiOutlineBanknotes />}
        title='Sales'
        color='green'
        value={formatCurrency(sales)}
      />
      <Stat
        icon={<HiOutlineCalendarDays />}
        title='Check ins'
        color='indigo'
        value={checkIns}
      />
      <Stat
        icon={<HiOutlineChartBar />}
        title='Occupancy rate'
        color='yellow'
        value={Math.round(occupancy * 100) + '%'}
      />
    </>
  );
}

export default Stats;
