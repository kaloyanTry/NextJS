export async function getAllEvents() {
  const response = await fetch(
    'https://nextjs-course-350ea-default-rtdb.europe-west1.firebasedatabase.app/events.json'
  );
  const data = await response.json();

  const events = [];
  for (const key in data) {
    events.push({
      id: key,
      ...data[key],
    });
  }

  return events;
}

export async function getFeaturedEvents() {
  const allEvents = await getAllEvents();

  const filteredEvents = allEvents.filter((event) => event.isFeatured);

  return filteredEvents;
}
