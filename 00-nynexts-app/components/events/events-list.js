import EventItem from './event-item';

import styles from './events-list.module.css';

function EventsList({ events }) {
  return (
    <ul className={styles.list}>
      {events.map((event) => (
        <EventItem
          id={event.id}
          title={event.title}
          description={event.description}
          location={event.location}
          date={event.date}
          image={event.image}
          key={event.id}
        />
      ))}
    </ul>
  );
}

export default EventsList;
