import Link from 'next/link';

import EvetnsList from '@/components/events-components/events-list';
import { getAllEvents } from '../data-events';

function HomePage() {
  const events = getAllEvents();

  return (
    <div>
      <h1>Home Page</h1>
      <div>
        <Link href='/events'>Filter the evetns</Link>
      </div>
      <EvetnsList events={events} />
    </div>
  );
}

export default HomePage;
