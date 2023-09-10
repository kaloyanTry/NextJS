import { useRouter } from 'next/router';

import { getAllEvents } from '../../data-events';
import EventsList from '../../components/events/events-list';
import EventsSearch from '../../components/events/events-search';

function AllEventsPage() {
  const events = getAllEvents();
  const router = useRouter();

  function findEventsHandler(year, month) {
    const fullPath = `/events-pages/${year}/${month}`;
    router.push(fullPath);
  }

  return (
    <>
      <EventsSearch onSearch={findEventsHandler} />
      <EventsList events={events} />
    </>
  );
}

export default AllEventsPage;
