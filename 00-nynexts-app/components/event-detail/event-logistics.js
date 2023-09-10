import Image from 'next/image';

function EventLogistics({ title, date, address, image, imageAlt }) {
  const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  const addressText = address.replace(', ', '\n');

  return (
    <section>
      <div>
        <Image
          src={`/${image}`}
          width={640}
          height={480}
          alt={imageAlt}
          priority
        />
      </div>
      <ul>
        <li>
          <h2>{title}</h2>
        </li>
        <li>
          <time>{humanReadableDate}</time>
        </li>

        <li>
          <address>{addressText}</address>
        </li>
      </ul>
    </section>
  );
}

export default EventLogistics;
