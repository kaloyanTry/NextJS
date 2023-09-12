import { useRouter } from 'next/router';
import Link from 'next/link';

import { getFilteredEvents } from '../../data-events';
import EvetnsList from '../../components/events-components/events-list';

function FilteredEventsPage() {
  const router = useRouter();
  const filteredData = router.query.slug;
  if (!filteredData) {
    return <p>No filtered data. Wait for loading...</p>;
  }

  const filteredYear = +filteredData[0];
  const filteredMonth = +filteredData[1];

  if (
    filteredYear > 2025 ||
    filteredYear < 2021 ||
    filteredMonth < 1 ||
    filteredMonth > 12
  ) {
    return (
      <>
        <p>Adjust your data...</p>
        <Link href='/events'>Show events</Link>
      </>
    );
  }

  const filteredEvents = getFilteredEvents({
    year: filteredYear,
    month: filteredMonth,
  });

  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <>
        <p>No events. Select other criteria..</p>
        <Link href='/events'>Show events</Link>
      </>
    );
  }

  return (
    <>
      <EvetnsList events={filteredEvents} />
      <Link href='/events'>Go to all events</Link>
    </>
  );
}

export default FilteredEventsPage;
