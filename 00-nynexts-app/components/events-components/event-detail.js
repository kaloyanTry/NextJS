function EventDetail({ title, location, description, date }) {
  return (
    <>
      <h3>Event {title} Page with</h3>
      <hr />
      <p>Date: {date}</p>
      <p>Location: {location}</p>
      <p>Description: {description}</p>
    </>
  );
}

export default EventDetail;
