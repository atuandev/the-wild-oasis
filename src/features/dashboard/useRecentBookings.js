import { useQuery } from '@tanstack/react-query';
import { subDays } from 'date-fns';
import { useSearchParams } from 'react-router-dom';
import { getBookingsAfterDate } from '../../services/apiBookings';

export function useRecentBookings() {
  const [searchParams] = useSearchParams();

  const numDay = searchParams.get('last')
    ? Number(searchParams.get('last'))
    : 7;

  const queryDay = subDays(new Date(), numDay).toISOString();

  const { data: bookings, isLoading } = useQuery({
    queryFn: () => getBookingsAfterDate(queryDay),
    queryKey: ['bookings', `last-${numDay}`],
  });

  return { bookings, isLoading };
}
