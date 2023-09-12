import EventItem from './event-item';

function EvetnsList({ events }) {
  return (
    <>
      <h3>Event List</h3>
      <ul>
        {events.map((event) => (
          <EventItem
            id={event.id}
            title={event.title}
            description={event.description}
            location={event.location}
            date={event.date}
            key={event.id}
          />
        ))}
      </ul>
    </>
  );
}

export default EvetnsList;
