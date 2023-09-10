import { getAllEvents } from '../data-events';
import EventsList from '../components/events/events-list';

function HomePage() {
  const events = getAllEvents();
  return (
    <div>
      {/* <h1>Home Page</h1> */}
      <EventsList events={events} />
    </div>
  );
}

export default HomePage;
