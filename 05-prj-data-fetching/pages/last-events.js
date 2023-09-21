import { useEffect, useState } from 'react';
import useSWR from 'swr';

function LastEventsPage(props) {
  const [events, setEvents] = useState(props.events);
  const { data, error } = useSWR(
    'https://nextjs-course-350ea-default-rtdb.europe-west1.firebasedatabase.app/events.json',
    (url) => fetch(url).then((res) => res.json())
  );

  useEffect(() => {
    if (data) {
      const transformedEvents = [];

      for (const key in data) {
        transformedEvents.push({
          id: key,
          title: data[key].title,
          description: data[key].description,
        });
      }
      setEvents(transformedEvents);
    }
  }, [data]);

  if (error) {
    return <p>Failed to load.</p>;
  }

  if (!events && !data) {
    return <p>Loading...</p>;
  }

  return (
    <ul>
      {events.map((event) => (
        <li key={event.id}>
          {event.title}: {event.description}
        </li>
      ))}
    </ul>
  );
}

export default LastEventsPage;
