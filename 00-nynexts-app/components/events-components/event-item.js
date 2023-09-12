import Link from 'next/link';

function EventItem({ id, title, description, location, date }) {
  return (
    <>
      <h1>Event Item {id}</h1>
      <li>
        <h2>
          {title} with id: {id}
        </h2>
      </li>
      <li>
        <p>{description}</p>
      </li>
      <li>
        <p>{location}</p>
      </li>
      <li>
        <p>{date}</p>
      </li>
      <Link href={`/events/${id}`}>Explore event</Link>
    </>
  );
}

export default EventItem;
