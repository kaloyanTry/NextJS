import Image from 'next/image';

import styles from './event-item.module.css';
import Button from '../ui/button';

function EventItem({ id, title, location, date, image }) {
  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  const formattedAddress = location.replace(', ', '\n');
  const exploreLink = `/events-pages/${id}`;

  return (
    <li className={styles.item}>
      <Image src={'/' + image} alt={title} width={640} height={480} priority />
      <div>
        <h2>{title}</h2>
        <div>
          <time>{formattedDate}</time>
        </div>
        <div>
          <address>{formattedAddress}</address>
        </div>
      </div>
      <Button link={exploreLink}>
        <span>Explore event</span>
      </Button>
    </li>
  );
}

export default EventItem;
