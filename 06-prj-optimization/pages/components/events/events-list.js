import EventItem from './event-item';

import styles from './event-list.module.css';

function EventList({ items }) {
  return (
    <ul className={styles.list}>
      {items.map((event) => (
        <EventItem
          id={event.id}
          title={event.title}
          location={event.location}
          date={event.date}
          image={event.image}
          key={event.id}
        />
      ))}
    </ul>
  );
}

export default EventList;
