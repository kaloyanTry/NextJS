import { useRouter } from 'next/router';

import { getFilteredEvents } from '../../data-events';
import EventsList from '../../components/events/events-list';
import EventsResultsTitle from '../../components/events/events-results-title';
import Button from '../../components/ui/button';

function FilteredEventsPage() {
  const router = useRouter();
  const filteredData = router.query.slug;
  if (!filteredData) {
    return <p>Loading...</p>;
  }

  const filteredYear = filteredData[0];
  const filteredMonth = filteredData[1];

  const numYear = +filteredYear;
  const numMonth = +filteredMonth;

  if (
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numYear > 2030 ||
    numYear < 2021 ||
    numMonth > 12 ||
    numMonth < 1
  ) {
    return (
      <>
        <p>Invalid filter. Adjust the values.</p>
        <Button link='/events-pages'>
          <span>Show all events</span>
        </Button>
      </>
    );
  }

  const filteredEvents = getFilteredEvents({
    year: numYear,
    month: numMonth,
  });

  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <>
        <p>No events found for the chosen filter.</p>
        <Button link='/events-pages'>
          <span>Show all events</span>
        </Button>
      </>
    );
  }

  const date = new Date(numYear, numMonth - 1);

  return (
    <>
      <EventsResultsTitle date={date} />
      <EventsList events={filteredEvents} />
    </>
  );
}

export default FilteredEventsPage;
