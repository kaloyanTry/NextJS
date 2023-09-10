import Button from '../ui/button';

function EventsResultsTitle({ date }) {
  const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
    month: 'long',
    year: 'numeric',
  });

  return (
    <section>
      <h1>Events in {humanReadableDate}</h1>
      <Button link='/events-pages'>
        <span>Show all events</span>
      </Button>
    </section>
  );
}

export default EventsResultsTitle;
