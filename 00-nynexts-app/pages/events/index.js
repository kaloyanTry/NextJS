import Link from 'next/link';
import { useRouter } from 'next/router';

import { getAllEvents, getFilteredEvents } from '../../data-events';
import EvetnsList from '../../components/events-components/events-list';
import EventsSearch from '../../components/events-components/events-search';

function EventsPage() {
  const events = getAllEvents();
  const router = useRouter();

  function eventsHandler(year, month) {
    const eventPath = `/events/${year}/${month}`;
    router.push(eventPath);
  }

  return (
    <>
      <h2>Filtered Events Page</h2>
      <EventsSearch onSearch={eventsHandler} />
      <EvetnsList events={events} />
    </>
  );
}

export default EventsPage;
