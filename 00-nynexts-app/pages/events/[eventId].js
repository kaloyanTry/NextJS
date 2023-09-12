import { useRouter } from 'next/router';
import Link from 'next/link';

import { getEventById } from '../../data-events';
import EventDetail from '../../components/events-components/event-detail';

function EventDetailPage() {
  const router = useRouter();
  const eventId = router.query.eventId;
  const event = getEventById(eventId);

  if (!event) {
    return <p>Error. There is No event found.</p>;
  }

  return (
    <>
      <EventDetail
        title={event.title}
        description={event.description}
        date={event.date}
        location={event.location}
      />
      <Link href='/'>Back to all events</Link>
    </>
  );
}

export default EventDetailPage;
