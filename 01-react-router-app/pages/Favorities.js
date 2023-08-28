import { useContext } from 'react';

import FavoritiesContext from '../store/favorities-context';
import MeetupList from '../components/meetups/MeetupList';

function Favorities() {
  const favoritiesCtx = useContext(FavoritiesContext);

  let content;

  if (favoritiesCtx.totalFavorities === 0) {
    content = <p>You got no favorities yet. Start adding some...</p>;
  } else {
    content = <MeetupList meetups={favoritiesCtx.favorities} />;
  }
  return (
    <section>
      <h1>My Favorities</h1>
      {content}
    </section>
  );
}

export default Favorities;
